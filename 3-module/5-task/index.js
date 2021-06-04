function getMinMax(str) {
let newStr = str.split(/[, ]/);
let min = 0;
let max = 0;
  for (let elm of newStr) {
 if (isNaN(parseFloat(elm))){
   continue;}
  min = Math.min(elm, min);
  max = Math.max(elm, max); 
}
  return result = {
    min: min,
    max: max
  }
}
