var $ = require('jquery');

// TODO
// FATTO articolo random
// ricerca nel testo dell'articolo (è possibile????)

var search, searchUrl, html = '';

$('form').submit( function(event){
search = $('input:first').val();
searchUrl = 'https://it.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + search + '&limit=10';
html = '';

    $.ajax({
      url: searchUrl,
      type: 'POST',
      dataType: 'jsonp',
      success: function(data) {
          var titoli = data[1];
          var snippet = data[2];
          var link = data[3];

          for (var i = 0; i < titoli.length; i++){
            html += '<div class="entries">'
            html += '<h3><a href="' + link[i] + '" target="_blank">';
            html += titoli[i];
            html += '</a></h3>';
            html += '<p>' + snippet[i] + '</p>';
            html += '</div>';
          }

          $('.result').html(html);
        }
      });

      event.preventDefault();
});
