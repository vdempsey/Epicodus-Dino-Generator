let apiKey = require('./../.env').apiKey;

export class Copy {
  constructor(search) {
    this.search = search;
  }

  apiConstructor(displayData) {
    let query = this.search;
    console.log("this is the key in apiConstructor " + apiKey);
    let getDinos = $.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=G&lang=en`)
    .then(function(results) {
      displayData(results);
    })
    .fail(function() {
      console.log('Something went wrong');
    });

  }
}
