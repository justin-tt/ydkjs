function fetchX(cb) {
  // synchronous function
  cb(3);
}

const fibonacciRecursive = function fibonacciRecursive(n) {
  // must validate n is positive
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
};

function fetchY(cb) {
  // asynchronous function
  setTimeout(cb, 1000, fibonacciRecursive(35));
}

function add(getX, getY, cb) {
  // using callbacks to handle BOTH synchronous/asynchronous functions
  // and gates
  // add() itself IS asynchronous
  var x, y;
  getX(function(xVal) {
    x = xVal;
    if (y != undefined) {
      cb (x + y);
    }
  });

  getY(function(yVal) {
    y = yVal;
    if (x != undefined) {
      cb (x + y);
    }
  });
}

console.log("before");
add(fetchX, fetchY, function(sum) {
  console.log(sum);
});
console.log("after");


// using promises
function addPromise(xPromise, yPromise) {
  return Promise.all([xPromise, yPromise])
  .then(function (values) {
    return values[0] + values[1];
  });
}


addPromise(3, 35).then(
  function(sum) {
    console.log(sum);
  }
);
