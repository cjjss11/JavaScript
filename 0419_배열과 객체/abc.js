// 함수 선언식 - 호이스팅이 발생
// 함수 표현식 - 호이스팅이 발생하지 않음

// kakao(99);
// function kakao(age) {
//   console.log(age);
// }


// const naver=function(age) {
//   console.log(age);
// }
// naver(41);

// ---------------------------------------------------------------------

// arrow function

// 바로 위에 있는 const nave=function(age)를 arrow function으로 표현한 것
// 매개변수가 하나이면 괄호 생략 가능, 여러개면 불가능
// const naver=age=>console.log(age)
// naver(41);


// const google=function(age) {
//   return age+10
// }
// console.log(google(40))

// 위 코드를 arrow function 형태로 변환
// const google=age=>age+10;
// console.log(google(40))


// 1. function 대신 화살표 씀
// 2. 매개변수가 1개면 () 생략 가능  // 에어비앤비 스타일에서는 넣음
// 3. 매개변수가 필요 없다면 그냥 () 또는 _로 표시
// 4. 만약에 함수 안에 식이 1개라면 {} 그리고 return도 생략 가능
// ---------------------------------------------------------------------


// ---------------------------------------------------------------------

// default argumente
// const google2 = (age,age2=150)=>age+10;

// // 함수에서 매개변수가 불일치 해도 상관없음 -> 버그 안 띄움
// const daum=(age,age2)=>{console.log(age,age2)};
// daum(12,64,13,6,56);

// // 함수에서 매개변수 spread 연산자도 사용가능
// const yahoo = (age,age2) => {console.log(age,age2)};
// yahoo(12,64,13,6,56);

// ---------------------------------------------------------------------

// 즉시 실행함수 (일회용 함수) - 한번만 실행하고 없어지는 함수
// (function (매개변수) {
//   console.log('A')
// })(인자값);

// (function (num) {console.log(num**3)})(2);

// 즉시 실행 함수는 한 번의 실행만 필요로 하는 초기화 코드 부분에 많이 사용됨
// 그 이유는 변수를 전역으로 너무 많이 선언하는 것을 피하기 위해서 
// 전역에 변수를 추가하지 않아도 되기 때문에 코드 충돌 없이 구현 가능
// 주의 : 즉시 실행 함수 사용 시에는 전 문장에서 세미콜론을 이용하여 해당 문장이 끝났음을 표시해야 함

// ---------------------------------------------------------------------

// Array 배열
// 리스트랑 비슷함
// const a = [1,2,3,4,5]
// a.reverse();

// a.push(6,7,[1,2,3]) // 배열에 원소 추가

// a.pop() // 맨 뒤의 원소 제거

// a.unshift(9) // 맨 앞의 원소 추가

// a.shift()  // 맨 앞의 원소 제거

// const result = a.indesOf(3); // 3번 값의 인덱스 출력

// const result2 = a.includes(3) // 해당 값이 존재하는지 True/False로 반환

// const ret = a.join('/')

// ---------------------------------------------------------------------

// *헬퍼 메소드 (고차함수) -> 이 메소드들의 인자값은 콜백 함수
// 콜백함수는 함수 매개변수의 인자값으로 함수가 들어가는 함수

// 1---------------------------------------------------------------------
// forEach (break, continue 안됨 / for문 돌리는 것과 유사함)
// const num = [8,5,2,1]
// num.forEach(ele=>console.log(ele)); // 함수 arrow function으로 표현

// num.forEach(function test(ele) {console.log(ele)}); // 함수 선언식으로 표현

// 위 코드 forEach로 출력한 것은 for문 돌리는 것과 같음
// for(let x; x < num.length; x++) {
//   console.log(num[x])
// }

// const num = [8,5,2,1]
// let num2 = []
// for (let x=0; x < num.length; x++) {
//   num2.push(num[x]*2)
// }
// console.log(num2)

// 2---------------------------------------------------------------------
// // map 사용해서 2 곱한 값을 num2에 담기
// const t = num.map(ele=>ele*2)
// console.log(t)

// // 짝수만 리스트에 담기
// num2 = []
// for (let x=0; x <num.length; x++) {
//   if (num[x]%2 === 0) {
//     num2.push(num[x])
//   }
// }
// console.log(num2)

// 3---------------------------------------------------------------------
// // filter 메소드 -> True 값만 반환
// const f = num.filter(ele=>ele%2 === 0)
// console.log(f)

// // type이 'fruit'인 것들의 name을 출력
// const products = [
//   { name : 'cucumber', type : 'vegetable'},
//   { name : 'banana', type : 'fruit'},
//   { name : 'carrot', type : 'vegetable'},
//   { name : 'apple', type : 'fruit'},
// ]
// const answer = products.filter(ele=>ele.type==='fruit')
// console.log(answer)

// const ans = answer.map(ele=>ele.name)
// console.log(ans)

// 4---------------------------------------------------------------------
// find 메소드
// 같은 값이 있으면 앞에 있는 값만 찾고 반환하고 꺼버림
// const num3 = [8,9,5,1,2,9]
// const j = 9;
// const findj = num3.find(ele=>ele===j); 
// console.log(findj)

// // const num3 = [8,9,5,1,2,9] 안에 값이 모두 3보다 큰지 확인
// // 모두 3보다 크면 True 그게 아니면 False 반환
// // 배열 안에 값을 모두 탐색할 때는 every 사용
// const every3 = num3.every(ele=>ele>3)
// console.log(every3)

// 5---------------------------------------------------------------------
// const num3 = [8,9,5,1,2,9] 안에 값이 하나라도 3보다 큰지 확인
// const some3 = num3.some(ele=>ele>3)
// console.log(some3)

// 6---------------------------------------------------------------------
// reduce 메소드 - 누적 값을 사용할 때 사용
// const num4 = [8,9,5,1,2,9]
// let sum = 0;
// // for문으로 풀이
// for (let x=0; x < num3.length; x++) {
//   sum += num3[x]
// }
// console.log(sum)

// reduce 사용해서 풀이
// const getsum = num3.reduce((acc,current)=>acc+=current,0) // 0은 acc의 초기값 설정
// console.log(getsum)
// acc는 누적 값 의미
// current는 순회되는 현재 값을 의미
// ,0은 acc에 들어갈 초기값 세팅 (0일 경우 생략 가능)

// ---------------------------------------------------------------------

// 문자열

let str = 'aasdf'

const t = str.includes('n'); // 문자 존재 여부 확인
console.log(t);

const t2 = str.split('');
console.log(t2)

const t3 = str.replace('s','Z')
console.log(t3)

const t4 = str.replaceAll('a','Y') // replaceAll을 사용하면 선택한 단어 모두를 바꿈
console.log(t4) 


let str2 = '   d   asdf   b   ';
console.log(str2)

let b = str2.trim(' ') // 공백 제거
console.log(b) // d 앞에 공백과 b 뒤에 공백 제거 (앞뒤 공백 제거)

let c = str2.replaceAll(' ','') // 모든 공백을 제거
console.log(c) 

let d = str2.trimStart(' ') // 앞에 공백 제거
console.log(d)

// ---------------------------------------------------------------------

// 객체

fastfood = {
  a : 1,
  'bbq' : 'gold_oliver',
  'ham burger' : {
    b : 1,
    c : 2,
  },
  abc : function() {  
    console.log('hi')
  },
  // abc() {  // 메소드 선언시 function 생략 가능
  //   console.log('hi')
  // },
}
// console.log(fastfood.hamburger.c) // 띄어쓰기가 없으면 이 형태로 가능
console.log(fastfood['ham burger'].c) // 띄어쓰기가 있다면 이 형태로 해야 함
fastfood.abc();

// ---------------------------------------------------------------------

// 객체 object2

const friends = ['kevin','jorny','kate']
const age = [27,29,25]

// 객체 key 값을 동적으로 활용이 가능

let index = 1;
const school = {
  friends : friends,
  age : age,
  // // 만약에 key 값과 할당하는 변수의 이름이 같다면 축약이 가능 -> 속성명 축약
  // friends,
  // age,
  [friends[index]] : age[index]
}
console.log(school)

// 객체문법1 : 메서드명 축약 (function 안 써도 됨)
// 객체문법2 : key 값을 동적으로 가능
// 객체문법3 : 속성명 축약 (key 값과 할당 받는 변수 이름이 같을 경우)
// 객체문법4 : destructuring

// destructuring - 객체를 분해해서 변수를 하나 만든 곳에 할당 하는 것
const user = {
  name1 : 'choi',
  name2 : 'jisoo',
  gender : 'female',
}
console.log(user.name1, user.name2, user.gender)

// 변수 선언 후에 객체 value를 담아서 출력
// const name1 = user.name1;
// const gender = user.gender;
// console.log(user.name1)

// 만약에 변수명과 객체의 key 값이 같다면
const{name1} = user;  // => const name1 = user.name1;
const{gender} = user; // => const gender = user.gender;

// const{name1,gender}=user;
console.log(name1,gender)

// 객체문법5 : spread
const user1 = ['kevin','jorny','kate']
console.log(...user1)

const ban = {
  name3 : 'kfc',
  name4 : 'MC',
}
const user2 = {
  name1 : 'choi',
  name2 : 'jisoo',
  ...ban  // ban 객체 안에 있는 것들이 user2 객체로 옴
}
console.log(user2)

// json을 자바스크립트 객체로 또는 자바스크립트 객체를 json 형태로 바꾸기

const kk = {
  name1 : 'choi',
  name2 : 'jisoo',
  gender : 'female',
  test : [1,2,3,4]
}
console.log(kk)

// json 형식은 자바스크립트와 다르게 key에는 반드시 쌍따옴표가 들어가야 함
// 자바스크립트 객체를 json 형태로 변환할 때 key 값에 쌍따옴표를 넣어줘야 함
// 이때 JSON.stringfy를 사용해서 객체를 string화 시킨 후 json 형태로 변환됨

const obj_to_Json = JSON.stringify(kk)
console.log(obj_to_Json)
console.log(typeof obj_to_Json) // string 타입

// json 형태를 다시 자바스크립트 형식으로 바꿈
const Json_to_obj = JSON.parse(obj_to_Json)
console.log(Json_to_obj)
console.log(typeof Json_to_obj) // object 타입

// ---------------------------------------------------------------------

// 객체에서 this
// this -> 자기참조 변수
// this는 어떤 방식으로 호출 되었느냐에 따라서 의미하는 것이 달라짐

// 1. 일반함수에서 호출 되었을 때 -> 전역객체인 window를 의미
// 2. 메소드로 호출 되었을 때 -> 메소드를 호출한 '그' 객체를 의미
// 3. 생성자 함수에서 호출이 되었을 때 -> 미래에 생성될 인스턴스를 의미

// 1. 일반함수에서 호출 되었을 때 -> 전역객체인 window를 의미
const fc =()=>{console.log(this)}
console.log(this) // 전역에서 this 출력했을 때 
// window 브라우저에서의 최상위 객체를 의미

// 2. 메소드로 호출 되었을 때 -> 메소드를 호출한 '그' 객체를 의미
const obj = {
  a : 1,
  b() { // function 생략됨
    console.log(this)
  },
}
obj.b();

// 3. 생성자 함수에서 호출이 되었을 때 -> this가 의미하는 것은 미래에 생성될 인스턴스를 의미
// key가 name이고 value가 choi인 객체를 3개 만든다면
const a1 = {
  name1 : 'choi',
}
const a2 = {
  name1 : 'choi',
}
const a3 = {
  name1 : 'choi',
}

// 조금 더 효율적으로 객체들을 만들기 위해 생성자 함수 사용
function Test(name) {
  this.name = name // 여기서 this가 의미하는 것은 새로 생성될 인스턴스를 의미
}
const a4 = new Test('choi')
const a5 = new Test('choi')