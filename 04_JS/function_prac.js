function multifly(num1, num2) {
  return num1 * num2;
  // return 문 다음 코드는 실행되지 않는다.
}

console.log(multifly(3, 7));
console.log(multifly(2, 2));

// square 함수 만들기
function square(num3) {
  return num3 ** 2;
}

console.log(square(4));

const square = function (num) {
  console.log(num ** 2);
};

square(4);