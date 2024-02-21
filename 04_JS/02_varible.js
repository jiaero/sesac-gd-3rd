console.log("connected!");

// 변수 선언하고 사용하기
/* var 키워드
1. 변수 선언 -> 값 할당
2. 변수 선언과 값 할당을 동시에
*/
// 변수 선언
var varName; // undefined

// 변수 할당
varName = "name";
console.log(varName); // name

// 변수 재할당
varName = "yuki"; // 변수의 값이 "name1" -> "yuki"로 변경
console.log(varName); // yuki 출력

// 변수 선언과 값 할당을 동시에
var varName2 = "name2";

// var의 문제점
// 1. 변수를 동일한 이름으로 재선언 할 수 있음
var varName = "lily";
console.log(varName); // lily
// 2. 변수를 선언하기 전 값을 할당할 수 있음
aa = 123;
console.log(aa); // 123
// 장점같아 보일 수 있으나, 유지보수 할 때 최악임

console.log(varName2); // 변수의 값 출력, name2
console.log("varName2"); // 문자열 출력, varName2

/*
    let 키워드
    1. 변수 선언 -> 값 할당
    2. 변수 선언과 값 할당을 동시에
*/
// 변수 선언
let letName;
// 값 할당
letName = "홍길동";
console.log(letName); // 홍길동

// 변수 선언과 값 할당을 동시에
let letName1 = "심청이";
console.log(letName1); // 심청이

// let letName1 = "심봉사"; // error: 중복 선언 불가
// console.log(letName1);

letName1 = "심봉사"; // 값 재할당은 가능
console.log(letName1);
