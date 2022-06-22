//exercise 1 map
function map(arr, callback) {
  let newArray = []
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArray[i] = (callback(item));
  }
  return newArray;
}
console.log(map([1, 6, 5], n => n**2));
//[ 1, 36, 25 ]


//exercise 2 filter

function filter(arr, predicate) {
  let newArray = [];
  for (let i=0; i < arr.length; i++ ) {
      const item = arr[i];
      if(predicate(item)) {
          newArray[i] = item;
      }
  }
  return newArray;
}

console.log(filter([2, 6, 5], n => n % 2 === 0));
//[2, 6]