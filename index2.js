let sum = 0;
function sumItems(array) {

  array.forEach((item) => {
    if(!(Array.isArray(item))){
      sum += item;
    } else {
    return sumItems(item);
    }
  });
  return sum;
}

console.log(sumItems([2, [3, [1, [2, [1, [1, 2, [3]], 11]], 2],1], 1]));
