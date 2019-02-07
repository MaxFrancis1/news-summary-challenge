$(document).ready(function() {

  $('#headline1').on('load', function() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=9546ccce286444f3b114b3fbe73d66d1';
    var req = new Request(url);
    fetch(req)
        .then(function(response) {
            console.log(response.json());
    })
  })

})
