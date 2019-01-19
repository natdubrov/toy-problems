function spEng(sentence){
  const sentenceLower = sentence.toLowerCase();
  const subString = 'english';
  const result = sentenceLower.includes(subString);
  return result;
}
