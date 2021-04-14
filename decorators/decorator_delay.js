function f(x) {
  console.log(x);
}
function delay(f, ms) {
  function wrapper(args) {
    setTimeout(f, ms, args);
  }
  return wrapper;
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 3000);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
