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

//exercise 5 addPunctuation
function addPunctuation(punctuation) {
  return( (str) => {return str + punctuation} );
}

const addExcitement = addPunctuation('!!!');
console.log(addExcitement('Hello World'));
// Hello World!!!
console.log(addExcitement('Pokemon, catch em all'));
// Pokemon, catch em all!!!
const addUnsure = addPunctuation('?!?');
console.log(addUnsure('Hello World'));
// Hello World?!?
console.log(addUnsure('Pokemon, catch em all'));
// Pokemon, catch em all?!?


//exercise 6 addFirstElement
function addFirstElement(element) {
  return( (array) => {
    array.unshift(element);
    return array;
  } );
}

const addOrange = addFirstElement('orange');
console.log(addOrange(['red', 'blue', 'green']));
// [orange,red,blue,green]
console.log(addOrange(['blue', 'blue', 'blue']));
// [orange,blue,blue,blue]

const addCat = addFirstElement('cat');
console.log(addCat(['dog', 'bird', 'lizard']));
// [cat,dog,bird,lizard]
console.log(addCat(['lizard', 'donkey', 'whale']));
// [cat,lizard,donkey,whale]
