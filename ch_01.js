function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

console.log(printArray(5));

// number = 5;

// for (let i = 1; i < number; i++) {
//   console.log(Array.from(i));
// }
