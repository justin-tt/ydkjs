function foo() {
  console.log(b);
  return 1;
}

var a,b,c;

c = {
  get bar() {
    console.log(a);
    return 1;
  }
}

a = 10;
b = 30;

a += foo();
b += c.bar;

console.log(a, b, a+b);
