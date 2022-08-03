module.exports = function toReadable (number) {
      let arrNum = Array.from(number.toString()).reverse().map(parseFloat);
    let word, words;
   
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if (parseInt(number) === 0) {
      return 'zero';
  }
  let arrNumLen = arrNum.length;
  words = [];
  
    if (arrNum[1] === 1) {
      arrNum[0] += 10;
    }
    if ((word = units[arrNum[0]])) {
      words.push(word);
  }
  
  if ((word = tens[arrNum[1]])) {
      words.push(word);
  }
  if ((word = units[arrNum[2]])) {
    words.push(word + ' hundred');
  }
  
  return words.reverse().join(' ').toString() ;
}
