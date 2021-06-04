function camelize(str) {
  let splitStr = str.split('-');
  for (let item = 1; item < splitStr.length; item++){
  splitStr[item]=splitStr[item][0].toUpperCase() + splitStr[item].slice(1);
  }
  let joinedStr=splitStr.join('');
  return joinedStr;
}
