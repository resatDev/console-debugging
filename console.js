// time and time end
console.time("This");
let total = 0;
for (let j = 0; j < 10000; j++) {
  total += j
}
console.log("Result", total);
console.timeEnd("This");

// Memory
console.memory()

// Assertion
const errorMsg = 'Hey! The number is not even';
for (let number = 2; number <= 5; number += 1) {
    console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
}

// Count
for (let i = 0; i < 11; i++) {
  console.count();
}

// group & groupEnd
console.group();
  console.log('Test message');
  console.group();
    console.log('Another message');
    console.log('Something else');
  console.groupEnd();
console.groupEnd();


// Table
const items = [
  {
    name: "chair",
    inventory: 5,
    unitPrice: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unitPrice: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unitPrice: 399.50
  }
];
console.table(items)

// Clear
console.clear()

// HTML Element
let element = document.getElementsByTagName("BODY")[0];
console.log(element)

// Dir
const userInfo = {"name":"John Miller", "id":2522, "theme":"dark"}
console.dir(userInfo);

// Color
console.log('%cColor of the text is green plus small font size', 'color: green; font-size: x-small');

// pass object, variable
const userDetails = {"name":"John Miller", "id":2522, "theme":"dark"}
console.log("Hey %s, here is your details %o in form of object", "John", userDetails);

// Default 
console.log('console.log');
console.info('console.info');
console.debug('console.debug');
console.warn('console.warn');
console.error('console.error');