// Task first

function fillArray(num, text) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(text);
  }
  return array;
}
console.log(fillArray(10, "qwerty"));


//Second task

let arrFilter = [0, 1, 2, null, undefined, 'qwerty', false];
function filterArray(arrFilter, ...filters) {
  for (let i = 0; i < arrFilter.length; i++) {
    for (let ii = 0; ii < filters.length; ii++) {
      if (arrFilter[i] === filters[ii]) {
        arrFilter.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return arrFilter;
}
console.log(filterArray(arrFilter, false, undefined, '', 0, null));
 

//Third task

function getSum() {
  let result = 0;
  for (i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return console.log(result);
}
getSum(0);
getSum(1, 2, 3);
getSum(5, 0, 10, 1, 5);

// Task four

function createPipe(x) {
  return function (y) {
    return x + y + x;
  };
}
const pipeFunction = createPipe(" ==== ");
result = pipeFunction("some text you like");
console.log(result);

// Task five

function showMessage(text, funkShowText) {
  funkShowText(text);
}
showMessage("Hello console", console.log);
showMessage("Hello alert", alert);
