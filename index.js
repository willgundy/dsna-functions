//exercise 1 map
function map(arr, callback) {
  let newArray = []
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArray[i] = (callback(item));
  }
  return newArray;
}
console.log(map([1, 6, 5], n => n**2))