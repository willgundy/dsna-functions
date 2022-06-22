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

//exercise 3 every
function every(arr, predicate) {
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!predicate(item)) {
      return false;
      break;
    }
  }
  return true;
}
console.log(every([2, 4, 6], n => n % 2 === 0));
//true
console.log(every([1, 2, 3], n => n % 2 === 0));
//false

//exercise 4 some
function some(arr, predicate) {
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (predicate(item)) {
      return true;
      break;
    }
  }
  return false;
}

console.log(some([1, 6, 5], n => n % 2 === 0));
//true
console.log(some([1, 7, 3], n => n % 2 === 0));
//false
