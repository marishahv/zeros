module.exports = function getZerosCount(number) {
  var firstDivider = 5;
  var zeroCount = 0;
 
  function calculateZeros(divider) {
    zeroCount += Math.floor(number / divider);
    if(Math.floor(number / divider) > 1){
      return calculateZeros(divider * 5);
    }
  } 
  calculateZeros(firstDivider);
  return zeroCount;
}

