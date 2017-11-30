import { Copy } from './../js/scripts.js';

let displayData = function(results) {
  // results.forEach(function(element) {
    console.log(results);
  //  $('.output2').text(`Your search of ${search} returned <img src="${results.data[element].images.original.url}">`);
   console.log(results.data[0].images.original.url);
  // });
};


$(document).ready(function() {

  $("form#generator").submit(function(event) {
    let search = $("#search").val();
    event.preventDefault();

    let newSearch = new Copy(search);
    let apiResults = newSearch.apiConstructor(displayData);

  });

});
