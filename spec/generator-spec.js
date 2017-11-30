import { Copy } from './../js/scripts.js';

describe('countWords', function() {
  it('should return the number for words field entered by user', function() {
    let line = new Copy(3, 1);
    expect(line.countWords()).toEqual(3);
  });
});

describe('countParagraphs', function() {
  it('should return the number for paragraph field entered by user', function() {
    let line = new Copy(3, 1);
    expect(line.countParagraphs()).toEqual(1);
  });
});
