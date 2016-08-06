// TODO
// articolo random
// ricerca nel testo dell'articolo (è possibile????)
var $ = require('jquery');

var search, searchUrl, html = '';


$('form').submit( function(event){
search = $('input:first').val();
searchUrl = 'https://it.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + search + '&limit=10';
html = '';
console.log(search);
search = $('input:first').val();

    $.ajax({
      url: searchUrl,
      type: 'POST',
      dataType: 'jsonp',
      success: function(data) {
          var titoli = data[1];
          var snippet = data[2];
          var link = data[3];

          for (var i = 0; i < titoli.length; i++){
            html += '<h3>' + data[1][i] + '</h3>';
            html += '<p>' + data[2][i] + '</p>';
            html += '<a href="' + data[3][i] + '" target="_blank">Link</a>';
          }

          $('.result').html(html);
        }
      });

      event.preventDefault();
});
