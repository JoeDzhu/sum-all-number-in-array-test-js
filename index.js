
function sumItems(array) {
  let sum = 0;
  array.forEach((item) => {
    if(!(Array.isArray(item))){
      sum += item;
    } else {
     return sum += sumItems(item);
    }
  });
  return sum;
}

console.log(sumItems([2, [3, [1, [2, [1, 11]], 1],1], 1]));
module.exports = sumItems;