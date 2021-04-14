function f(a) {
  console.log(a);
}

function throttle(f, ms) {
  isSleep = false;
  let stackCalls = [];
  return function (arguments) {
    stackCalls.push([arguments]);
    if (!isSleep) {
      f.apply(this, stackCalls.pop());
      isSleep = true;
      setTimeout(() => {
        isSleep = false;
        if (stackCalls.length > 0) {
          f.apply(this, stackCalls.pop());
        }
      }, ms);
    }
  };
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
