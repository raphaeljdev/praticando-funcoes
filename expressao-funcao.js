const fatorial = function f(num) {
  if (num === 0 || num === 1) return 1;
  return num * f(num - 1);
};

// 5 * fatorial(4) // 120
// 4 * fatorial(3) // 24
// 3 * fatorial(2) // 6
// 2 * fatorial(1) // 2
// 1 * fatorial(0) // 1

console.log(fatorial(5));
