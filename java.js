// 변수 선언과 할당: var, let, const 키워드를 사용하여 이름, 나이, 거주지와 같은 정보를 저장하는 변수를 각각 선언하고 값을 할당하세요.

var name = "zzzingnii";
let age = 25;
const  city = "Busan"

console.log(typeof Name);  
console.log(typeof age);   
console.log(typeof city);

// 변수 선언과 할당2: const 키워드를 이용해서 person 객체를 만들고, 이름, 나이를 선언해보세요.
// 변수 선언과 사용3: 위에서 선언한 person 객체의 각 속성을 console.log를 이용해서 출력하세요.

const person = {
    name: "Yoonjieun",
    age: 25           
};

console.log(person.name);
console.log(person.age);

// 데이터 타입 확인: 선언한 변수들의 데이터 타입을 typeof 연산자를 사용하여 출력하세요.

let number = 20;

console.log(typeof number);

// 산술 연산: 두 개의 숫자 변수를 선언하고, 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산을 수행한 결과를 출력하세요.

let x = 20;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// 문자열 연결: let 키워드를 사용하여 이름과 성을 담는 두 개의 변수를 선언하고, 이들을 연결하여 전체 이름을 출력하세요.

let firstName = "YOON";
let lastName = "zzzingnii";
let fullName = firstName + " " + lastName;
console.log(fullName);

// 조건문: 사용자의 나이를 입력받아, 18세 이상이면 "성인입니다." 그렇지 않으면 "미성년자입니다."를 출력하는 조건문을 작성하세요.


if (age >= 18) {
    console.log("성인입니다.");
} else {
    console.log("미성년자입니다.");
}

// 삼항 연산자: 나이 변수에 삼항 연산자를 사용하여 "성인" 또는 "미성년자"를 변수에 저장하고 이를 출력하세요.

let agestatus = (age >= 18) ? "성인" : "미성년자";
console.log(agestatus);


// 배열 선언과 사용: 좋아하는 색상 3개를 배열에 저장하고, 배열의 첫 번째, 중간, 마지막 요소를 각각 출력하세요.

const Colors = ["Blue", "Yellow", "RED"];

console.log(Colors[0]);
console.log(Colors[1]);
console.log(Colors[2]);


// 배열 반복과 합계 계산: 숫자로 구성된 배열을 선언하고, 배열의 모든 요소를 더한 값을 출력하세요.

const numbers = [1, 2, 3, 4, 5];
console.log(
  numbers[0] + numbers[1] + numbers[2] +  numbers[3] + numbers[4] +  numbers[5]
);

// 논리 연산자1: 두 개의 boolean 타입의 변수를 선언하고, AND 연산을 적용한 결과를 각각 출력하세요.
// 논리 연산자2: 두 개의 boolean 타입의 변수를 선언하고, OR 연산을 적용한 결과를 각각 출력하세요.
// 논리 연산자3: 두 개의 boolean 타입의 변수를 선언하고, NOT 연산을 적용한 결과를 각각 출력하세요.

let boolean1 = true;
let boolean2 = false;

console.log(boolean1 && boolean2); //false
console.log(boolean1 || boolean2); //true
console.log(!boolean2); //true


// 1. var, let, const를 사용하여 각각 변수를 선언하고 값을 할당하세요.
let i = 10;
console.log(i);

// 2. 다음 변수들의 데이터 타입을 콘솔에 출력하세요.

let a = 42;
let b = 'hello';
let c = true;
let d = null; //object
let e; //undefined//
console.log(e);

// 3. 두 개의 숫자를 더하고, 뺄셈, 곱셈, 나눗셈을 하는 코드를 작성하세요.

let num1 = 10;
let num2 = 5;

console.log (num1 + num2); 
console.log (num1 - num2);
console.log (num1 * num2);

// 4. 두 개의 숫자를 비교하고 결과를 콘솔에 출력하세요.

console.log(num1 >= num2);

// 5. 논리 연산자를 사용하여 두 개의 불리언 변수를 조합하세요.

let f = true;
let g = false;

console.log(f && g);
console.log(f || g);
console.log(!g);

// 6. 할당 연산자를 사용하여 변수에 값을 더하고 빼세요.

let h = 10;
h += 5;
console.log(h);

h -= 5;
console.log(h);


// 7. 두 개의 문자열을 연결하고 결과를 출력하세요.

let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result);

// 8. 템플릿 리터럴을 사용하여 변수를 문자열에 포함하세요.

// let name = "Alice";
// let Age = 25;
// let message = '내 이름은 ${name} 이고 나이는 ${Age} 세 이다.';
// console.log(message);

// 9. 배열을 선언하고 요소에 접근하여 출력하세요.

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 10.  객체를 선언하고 속성에 접근하여 출력하세요.

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   console.log(person.name); 
//   console.log(person.age); 
//   console.log(person.city); 

// 11.  두 수를 더하는 함수를 선언하고 호출하여 결과를 출력하세요.

function add(a, b) {
    return a + b;
}
console.log(add(10,5));

// 12. 주어진 수가 짝수인지 홀수인지 판단하는 조건문을 작성하세요.

let num = 7;
if (num % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
  
// 13. 1부터 10까지의 숫자를 출력하는 for 반복문을 작성하세요.

// 14. 1부터 10까지의 숫자를 출력하는 while 반복문을 작성하세요.

// 15. 배열의 각 요소를 출력하는 forEach 반복문을 작성하세요.
// let fruits = ['Apple', 'Banana', 'Cherry'];

// 16. 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 코드를 작성하세요.
// let numbers = [1, 2, 3, 4];

// 17. 배열에서 짝수만 필터링하는 코드를 작성하세요.
// let numbers = [1, 2, 3, 4, 5, 6];

// 18. 문자열을 대문자로 변환하고 출력하는 코드를 작성하세요.
// let str = 'hello world';

// 19. 현재 날짜와 시간을 출력하는 코드를 작성하세요.

// 20. Math 객체를 사용하여 주어진 수의 제곱근을 구하는 코드를 작성하세요.
// let num = 16;
