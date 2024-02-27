console.log("connected");

// for문
/* 
    for (for문 내에서 사용할 변수 선언; 조건식 (어디까지 증가/감소 할지 작성); 증감) {
        반복할 코드
    }
*/
// i + 1 = i / i += 1 / i++ -> 모두 동일함
// i - 1 = i / i -= 1 / i-- -> 모두 동일함
// i++: 변수 i에서 값을 꺼낸 뒤, 1을 더함
// i--: 변수 i에서 값을 꺼낸 뒤, 1을 뺌

// 5씩 늘리고 싶을 때 -> i += 5 -> i를 5씩 늘림

for (let i = 0; i < 10; i++) {
  // console.log('안녕', i);
  console.log(`안녕 ${i}`);
}

for (let i = 0; i < 10; i += 3) {
  console.log(i);
}

// 1부터 5까지 1씩 증가하면서 출력하는 방법

// 1. i <= 5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// 2. i < 6
for (let i = 0; i < 6; i++) {
  console.log(i);
}

// 5부터 1까지 1씩 감소하면서 출력하기
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 퀴즈. 1부터 n까지 모든 수를 더해 result로 콘솔에 찍기
let n = 10;
let result = 0;

for (let i = 0; i <= n; i++) {
  result += i; // result = result + i
}

console.log(result);

// for문과 배열 함께 사용하기
// 배열의 모든 요소 출력하기
let cafe = ["american", "latte", "espresso", "tea"];
console.log(cafe.length); // 배열의 길이를 출력 -> 4

for (let i = 0; i < cafe.length; i++) {
  console.log("cafe menu", cafe[i]);
  // i가 0일 때 cafe[0]
  // i가 1일 때 cafe[1]
  // i가 2일 때 cafe[2]
  // i가 3일 때 cafe[3]
  // i가 4일 때 x -> i < 4이기 때문 -> 조건식이 false라서 for문 종료
}

// 배열 요소의 총 합 구하기
let numArr = [99, 88, 77, 66, 55];
let numSum = 0;

for (let i = 0; i < numArr.length; i++) {
  // numSum = numSum + numArr[i];
  numSum += numArr[i];
  console.log(numSum);
}

console.log(numSum);

// for문과 if문 함께 사용
// 짝수만 출력
// 1. for문만 사용
for (let i = 2; i < 10; i += 2) {
  console.log(i);
}

// 2. if문과 함께 사용
for (let i = 2; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 구구단 만들기
for (let i = 2; i <= 9; i++) {
  console.log(`${i}단`);
  for (let n = 1; n <= 9; n++) {
    console.log(`${i} * ${n} = ${i * n}`);
  }
}

// 구구단 만들기 ( 2단 )
let two = 2;
for (let i = 1; i <= 9; i++) {
  console.log(`${two} * ${i} = ${two * i}`);
}

// const number = 2;
let number = Number(prompt("구구단을 계산할 숫자를 입력해주세요."));
// console.log(number + '단');
for (let i = 1; i < 10; i++) {
  // console.log(number + '*' + i + '=' + number * i)
  console.log(`${number} * ${i} = ${number * i}`);
}

// 이중 for문
fot (let i = 0; i < 5; i++) {
    console.log('i :', i);

    for (let j; j < 10; j++) {
        console.log(`현재 i는 ${i}이고, j는 ${j}입니다.`)
    }
}

// 0 ~ 100의 숫자 중에서 2 또는 5의 배수 총합 구하기

let sum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0 ) {
    sum += i;
  }
}
console.log(sum)


