import { Copy } from './../js/scripts.js';

let displayData = function(results) {
  results.forEach(function(element) {
    element.forEach(function(item){
      $('.output2').append("<p>" + item + '<p>');
    });
  });
};


$(document).ready(function() {

  $("form#generator").submit(function(event) {
    let words = parseInt($("#words").val());
    let paragraph = parseInt($("#paragraph").val());
    event.preventDefault();

    let newLine = new Copy(words, paragraph);
    let apiResults = newLine.apiConstructor(displayData);

    $(".output").text("The number of words equal " + newLine.countWords() + " . The number of paragraphs equal " + newLine.countParagraphs() + " .");

  });

});
