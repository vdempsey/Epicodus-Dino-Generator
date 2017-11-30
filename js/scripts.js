export class Copy {
  constructor(wordsNumber, paragraphNumber) {
    this.wordsNumber = wordsNumber;
    this.paragraphNumber = paragraphNumber;
  }

  countWords() {
    let value = this.wordsNumber;
    return value;
  }

  countParagraphs() {
    let value = this.paragraphNumber;
    return value;
  }

  apiConstructor(displayData) {
    let paragraph = this.paragraphNumber;
    let words = this.wordsNumber;
    let getDinos = $.get(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraph}&words=${words}`)
    .then(function(results) {
      displayData(results);

    })
    .fail(function() {
      console.log('Something went wrong');
    });

  }
}
