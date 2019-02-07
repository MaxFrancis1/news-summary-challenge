'use strict';

function newsApp() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=9546ccce286444f3b114b3fbe73d66d1';
    var req = new Request(url);
    fetch(req)
      .then(r => r.json())
      .then(r => {
        if (r.status === "ok") {
          r.articles.sort(function(a, b) {
          if (b.publishedAt === null) return 1;
            return b.publishedAt.localeCompare(a.publishedAt);
          })
    })
}
