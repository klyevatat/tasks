function fprint(x) {
  console.log(x);
}
function debounce(func, ms) {
  let isSleep = false;

  return function () {
    if (isSleep) return;
    func.apply(this, arguments);
    isSleep = true;
    setTimeout(() => (isSleep = false), ms);
  };
}
let f = debounce(fprint, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован
