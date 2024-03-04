// 문자열에서 사용 가능한 속성과 메서드
// length, toUpperCase(), toLowerCase(), trim(), split()
// indexOf(), replace(), replaceAll(), slice(), repeat()
// 지금까지는 우리가 직접 함수를 만들어 사용
// 메서드는 자바스크립트에서 만들어 놓은 함수 -> 그래서 뒤에 괄호가 붙음
// 즉, 이미 정의가 되어있으므로 가져다 사용하면 됨
let str = "Strawberry Moon";
let str2 = "   Strawberry Moon   ";

// 문자열 인덱싱
console.log(str[1]); // t
console.log(str[0]); // S -> 컴퓨터는 숫자를 0부터 시작
console.log(str[0] + str[3]); // Sa
// Sonny

console.log(str[0] + str[12] + str[14] + str[14] + str[9]);

// length -> 속성
// 문자열의 길이를 반환 (공백 포함)
console.log("str 문자열의 길이", str2.length);
console.log("str2 문자열의 길이", str2.length);

// 인자가 없는 메소드: xx.method() 형태
// - toUpperCase()
// - toLowerCase()
// - trim()
let msg = "Happy Birthday~";
let userId = "       user123";
console.log(msg.toUpperCase()); // 전부 대문자로 출력
console.log(msg.toLowerCase()); // 전부 소문자로 출력
console.log(userId.length); // userId의 공백 포함 문자열 길이
console.log(userId.trim()); // userId의 양끝 공백을 제거
console.log(userId.trim().length); // // 공백 제거되었는지 확인

// 메서드 체이닝
// 메서드를 연달아 사용 가능
// userId의 양 끝 공백을 제거하고, 모두 대문자로 변환 후 길이 반환
console.log(userId.trim().toUpperCase().length);

// 인자 있는 메서드: xx.method(arg) // arg : 인자(argument)의 약자
// - indexOf(): 문자열에서 인자로 받은 문자열의 인덱스를 반환, 없다면 -1 반환
// - replace(교체될 값, 대신 들어갈 값): 교체될 값의 문자를 대신 들어갈 값으로 변환 -> 제일 처음에 들어간 값만 변환
// - replaceAll(): 해당하는 모든 문자를 교체
// - slice(startIdx[, endIdx]): startIdx ~ endIdx - 1 까지 자름 (음수 인덱스 가능) // idx : index의 약자
// - repeat(n): 문자열을 n번 반복
// - split(): 인자로 받은 문자열을 기준으로 해당 문자열을 나누고, 나눈 문자열을 배열로 만들어 반환
// - charAt(n): 인자로 받은 숫자 n 인덱스 번호에 대한 문자열 하나 반환

let fruit = "applemango";

// indexOf()
console.log(fruit.indexOf("apple")); // 0, 제일 앞에 있는 글자의 인덱스를 출력한다.
console.log(fruit.indexOf("mango")); // 5
console.log(fruit.indexOf("e")); // 4
console.log(fruit.indexOf("z")); // -1

// charAt(n)
console.log(fruit.charAt(8)); // g
console.log(fruit.charAt(5)); // m
console.log(fruit[5]); // m

// slice()
console.log(fruit.slice(5)); // mango, 스타트 인덱스인 5번째 인덱스부터 모든 글자를 출력한다.
console.log(fruit.slice(3, 6)); // lem, 3번째부터 6번째까지 인덱스를 출력한다.
console.log(fruit.slice(-1)); // o, 음수의 숫자를 넣으면 뒤에서부터 거꾸로 인덱스를 센다.
console.log(fruit.slice(-3)); // ngo
console.log("fruit의 값에 변화가 있는지 확인", fruit); // applemango, 변화 없음

let msg2 = "Wow! It's so amazing!! Wow!!!";

// replace(a, b)
console.log(msg2.replace("Wow", "OMG")); // OMG! It's so amazing!! Wow!!!, 첫번째 'Wow'만 'Omg'로 변환
console.log(msg2.replaceAll("Wow", "OMG")); // OMG! It's so amazing!! OMG!!!, 모든 'Wow'를 'Omg'로 변환
console.log("msg의 값에 변화가 있는지 확인", msg2);

// 2024.02.28 -> 2024-02-28로 바꾸기
let date = "2024.02.28";
console.log(date.replaceAll(".", "-")); // 2024-02-28
console.log(date.replaceAll("2024.02.28", "2024-02-28")); // 2024-02-28

// repeat(n)
console.log("HelloWorld".repeat(5)); // HelloWorld가 공백없이 다섯번 반복됨

// split()
console.log(date.split(".")); // 인자로 받은 문자열을 .을 기준으로 나누어 배열로 변환
// (3) ['2024', '02', '28']
console.log(date.split("")); // 모든 글자를 하나씩 나누어 배열로 변환

let splitedDate = date.split(".");
console.log(typeof splitedDate); // object

console.log("--------------------------");

// 배열에서 사용 가능한 속성과 메서드
// push, pop, unShift, shift, indexOf, reverse, length
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "panda", "dog", "capybara"];

arr1[5] = 6;
console.log(arr1);
arr1[7] = 8; // 중간에 빈 값(empty)이 생길 수 있음
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
// push(): 배열의 가장 마지막에 해당 요소 추가
arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1); // [1, 2, 3, 4, 5, 10, 20, 30]

// pop(): 배열의 마지막 요소 제거
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);

// unShift(): 맨 앞에 요소 추가
arr2.unshift("bear");

console.log(arr2); // ['bear', 'quakka', 'panda', 'dog', 'capybara']

// shift(): 맨 앞 요소 제거
arr2.shift();
console.log(arr2); // ['quakka', 'panda', 'dog', 'capybara']

// push, pop, unShift, shift -> 문자열에서 메소드를 사용한 것과 다르게 원래의 배열이 변경됨
// -> 문자열에서 메서드를 사용한 것과 다르게 원래의 배열이 변경됨

// includes(): 해당 배열에 인자로 받은 값과 동일한 요소가 있는지 확인 후 t/f 를 반환
console.log(arr2.includes("quakka")); // true

// indexOf(): 문자열과 마찬가지로 해당 요소의 인덱스를 반환
console.log(arr2.indexOf("capybara")); // 3

// length -> 속성이므로 괄호 작성 X
console.log(arr2.length); // 4

// reverse(): 배열의 순서를 뒤집음 -> 배열을 변경시킴
arr2.reverse();
console.log(arr2); // ['capybara', 'dog', 'panda', 'quakka']

// join(): 배열을 인자의 문자열 기준으로 합쳐 문자열로 반환
// 원래 배열을 변경시키지 않음
console.log(arr2); // ['capybara', 'dog', 'panda', 'quakka']
console.log(arr2.join()); // capybara,dog,panda,quakka // 인자를 작성하지 않으면 배열 안의 컴마(,)까지 문자열로 변환
console.log(typeof arr2.join()); // string
console.log(arr2.join("")); // capybaradogpandaquakka, 빈 문자열 작성 시 모든 요소가 붙어서 문자열로 변환
console.log(arr2.join(" 그리고 ")); // capybara 그리고 dog 그리고 panda 그리고 quakka
console.log(arr2); // ['capybara', 'dog', 'panda', 'quakka']

console.log("--------------------------");

// 배열에서의 반복문
// for
let arr3 = [1, 2, 3, 4, 5];
let alphabets = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

console.log("for of를 사용한 배열에서의 반복");
// for of
// 여기서 number는 for of문에서 내가 지어준 변수명
// 무엇을 의미하는지 알 수 있도록 작성
// index 번호로 순환하는 것이 아니라 배열 요소에 직접 접근
for (let number of arr3) {
  console.log(number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

// for Each()
// 매개변수 3개를 받는 배열의 반복을 위한 메소드(=함수)
// 매개변수 이름은 마음대로 지어도 상관 없지만 순서에 따른 의미는 항상 동일 -> 순서 중요 !
/*
    arr.forEach(function (요소를 지칭할 별명[, 인덱스를 지칭할 별명[, arr를 지칭할 별명]]) {})
*/
console.log("for Each를 사용한 배열에서의 반복");
arr3.forEach(function (num, idx) {
  console.log("num", num);
  console.log("idx", idx);
});

console.log("--------------------------");

// filter
// 조건을 만족하는 요소들을 "배열"로 반환
// arr의 요소 중 길이가 5자 이상인 요소만 모아 새로운 배열 만들기
let newArr2 = arr2.filter(function (animal) {
  return animal.length >= 5;
});

// 화살표 함수 작성 예시
let newArr3 = arr2.filter((animal) => animal.length >= 5);
let newArr4 = arr2.filter((animal) => {
  return animal.length >= 5;
});

console.log(newArr2); // ['capybara', 'panda', 'quakka']
console.log(arr2); // ['capybara', 'dog', 'panda', 'quakka'], 원래 배열에 영향을 주지 않음

const words = ["미어캣", "라이거", "유니콘", "고질라", "드래곤", "라쿤"];

const newWords = words.filter(function (ani) {
  return ani.charAt(0) === "라" || ani.charAt(0) === "유";
});
console.log(newWords); // ['라이거', '유니콘', '라쿤']

// find(): 배열에서 특정 조건을 만족하는 첫번째 요소 반환
// filter와 비슷하게 조건ㅇ르 작성하지만 배열을 반환하는 것이 아닌 조건을 처음 만족하는 "값"으로 반환
let findResult = words.find(function (ani) {
  return ani.charAt(0) === "드";
});

console.log(findResult); // '드래곤'

// map(): 배열 내의 모든 원소에 대해 호출한 함수의 결과를 모아 새로운 배열 반환
// arr.map(function(value[, index[, arr]] {})
// 배열의 모든 원소를 for문으로 돌려서 바꿀 수 있지만 더 간단히 메소드를 사용해 변경 가능
let nums = [1, 2, 3, 4, 5];
let mapArr = nums.map(function (n) {
  return n * 100;
});
console.log(mapArr); // [100, 200, 300, 400, 500]

// 배열에서의 반복 실습
// 1 ~ 100 for문을 사용해서 만들기
let numArr = [];
for (let i = 0; i <= 100; i++) {
  numArr.push(i);
}

// 합 구하기
// 1. for문
let sum1 = 0;
for (let i = 0; i < numArr.length; i++) {
  sum1 += numArr[i];
}
console.log(sum1);

// 2. for of문
let sum2 = 0;
// numArr 배열에 있는 모든 요소를 num이라고 지칭하면서 반복한다.
for (let num of numArr) {
  sum2 += num;
}
console.log(sum2);

// 3. forEach문
let sum3 = 0;
numArr.forEach(function (num) {
  sum3 += num;
});
console.log(sum3);

// 화살표 함수
// numArr.forEach((num) => {
//   sum3 += num;
// });