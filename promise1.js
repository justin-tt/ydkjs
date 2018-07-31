function unreliableAdd(x, y) {
  let r = Math.random();
  if (r < 0.8) {
    throw "broke";
  } else {
    return x + y;
  }
}

function foo(x, y) {
  return new Promise(function(resolve, reject) {
    let result = unreliableAdd(x, y)
    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

let p = foo(4, 5).then(
  (result) => {console.log(result)},
  (err) => {console.log(err)}
);
console.log(p);
