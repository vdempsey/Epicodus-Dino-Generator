import { Copy } from './../js/scripts.js';

let displayData = function(results) {

  console.log(results);
  // results.forEach(function(element) {
    // let images = results.data.images.original.url;
  //  $('.output2').text(`Your search of ${search} returned ${<img src="${results.data[0].images.original.url}">}`);
  for(let i=0; i<25; i++) {
     $('.output2').append("<img src=" + results.data[i].images.original.url + ">");
   console.log(results.data[i].images.original.url);
 }

};


$(document).ready(function() {

  $("form#generator").submit(function(event) {
    let search = $("#search").val();
    event.preventDefault();

    let newSearch = new Copy(search);
    let apiResults = newSearch.apiConstructor(displayData);

  });

  $(".btn-error").click(function(event) {
    $('.output2').empty();
  });

});
