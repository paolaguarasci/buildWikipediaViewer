// TODO
var $ = require('jquery');

var search, searchUrl, html = '';


$('form').submit( function(event){
search = $('input:first').val();
searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + search + '&limit=10';
html = '';
console.log(search);
search = $('input:first').val();

    $.ajax({
      url: searchUrl,
      type: 'POST',
      dataType: 'jsonp',
      success: function(data) {

          for (var i = 0; i < data[3].length; i++){
            html += '<p>' + data[3][i] + '</p>';
          }

          $('.result').html(html);
        }
      });

      event.preventDefault();
});
