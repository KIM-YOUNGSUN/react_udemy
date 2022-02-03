---
date: 2021-01-27 Thursday
---

# TIL

> **개인 공부_udemy class**
<br />

# JS

## let & const 차이
- ES6에서 변수를 만들 때 사용(그전에는 var사용)
- let : 가변한 변수를 만들 때 사용(변수 할당 후 값이 수정될 경우
)
- const : 상수 값을 만들 때 사용(변수 할당 후 다시는 수정하지 못함)
---

## Arrow Functions (화살표 함수)
- 일반 함수 구문보다 더 짧고 간결함
- this는 항상 원하는 객체를 참조하지 않는데 화살표 함수를 사용한다면 갑자기 변경되는 일이 없음
- map 
  - 빌트인 배열 메소드
  - 배열의 각 요소를 실행
```js
const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => { // map함수는 예전 값을 새 값으로 리턴
  return num * 2; // 기존 값에 *2를 해서 새 정렬을 map 하는 것
});

console.log(numbers); // [1, 2, 3]
console.log(doubleNumArray); // [2, 4, 6]
```
---

## Export & Import (내보내기 & 가져오기)
- Export : 
- Import 
    - 한 파일 안에 한가지의 상수만 존재할 경우(default export) : `import 원하는이름 from './파일명'` ➡ 이름을 마음대로 정해서 파일명으로 가져오기
    - 한 파일 안에 두가지 이상의 상수가 존재할 경우(named export) : `import {가져올 상수명} from './파일명'` ➡ 이름으로 가져오기
---

## Classes
- 재사용성 용이
- extends(상속)이 가능
  - class의 값을 모두 접근하여 사용 가능
- super : 기존 class 값이 아닌 하위 클래스 값만 사용하고 싶을 경우 

```js
✔ class 기본 구성
class Person { 
  // constructor를 이용하여 claa 객체의 초기값을 설정
  constructor (name,age, city) { this.name = name; 
  this.age = age; 
  this.city = city;
  } // Person {name: 'kim', age: '24', city: 'seoul'}
  //메서드생성 
nextYearAge() { 
  return Number(this.age) + 1; 
  } 
} 
let kim = new Person('kim','24','seoul'); 
console.log(kim.nextYearAge()); // 25
```

```js
✔ class super 사용 예시
class Person { 
  constructor (name,age, city) { this.name = name; 
  this.age = age; 
  this.city = city; } 
  //메서드생성 
  nextYearAge() { 
    return Number(this.age) + 1; } } 
class introducePerson extends Person { 
    constructor(name, age, city, futureHope) { 
      super(name, age, city); 
      this.futureHope = futureHope } 
      introduce () { 
        return `저는 ${this.city}에 사는 ${this.name} 입니다. 내년엔 ${super.nextYearAge()}살이며, 장래희망은 ${this.futureHope} 입니다.` 
        } 
      } 
      let kim = new introducePerson('kim','24','seoul', '개발자'); 
      console.log(kim.introduce()) // 저는 seoul에 사는 kim입니다. 내년엔 25살이며 장래희망은 개발자입니다.
```
---

## Spread & Rest Operators (전개 및 나머지 연산자)
- spread operator(전개 연산자) 
  - 배열을 편리하게 복사하거나 예전 객체를 복사하면서 객체에 속성을 추가할때 사용
  - 모든 요소와 속성을 새 배열이나 새 객체에 분배
```js
✔ Array 복사
const numbers = [1,2,3];
const newNumbers = [...numbers, 4]; // numbers를 그대로 복사하고 4를 추가(...이 복사)

console.log(newNumbers); // [1,2,3,4] -> 그대로 복사가 되고 4가 자연스럽게 추가됨

✔ Object 복사
const person = {
  name = 'Max';
};
const newPerson = {
  ...person, // person을 그대로 복사하고
  age: 28 // 새로운 내용 추가
}

console.log(newPerson); // [object, Object] { age:28, name: "Max"}
```
---

## Destructuring (구조분해할당)
- 구조 분해 
  - 배열 요소나 객체 속성을 추출해서 변수로 저장하는 역할
  - 하나의 요소나 속성만을 배열이나 객체를 위한 변수로 저장
```js
✔ 배열 구조 분해
const numbers = [1, 2, 3];
[num1, ,num3] = numbers; // numbers 배열 순서대로 가져올 수 있음(2는 추출을 원치 않기 때문에 비워둠)

console.log(num1, num3); // 1,3 추출 

✔ 객체 구조 분해
{name}={name: 'Max', age: 28} // 객체 구조 분해에서는 속성의 이름이 정하기 때문에 name만 값이 추출되고 age는 추출되지 않는다

console.log(name) // Max
console.log(age) // undeifined
```  
---

## 참조형 및 원시형 데이터 타입
- 원시 타입 종류 : 숫자, 문자, 불린
  - 언제든 다른 변수에 변수를 재할당하고 저장할 수 있음
- 참조 타입 종류 : 객체, 배열
  - 객체나 배열을 복사하면 앱의 한 장소에서 컨트롤 할 수 있음 그러나 다른 장소에서 같은 객체를 컨트롤 할 수 있기 때문에 변화가 생기지 않도록 복사해서 사용해야함(...으로 복사)
  - ...을 이용하여 복사하는 것이 아니라 그냥 새로운 객체에 기존 객체를 넣어버리게 되면 복사가 아닌 재할당임(값이 아니라 포인터를 복사했기 때문에 이후 새로운 값을 넣게 되면 기존 값이 바뀌어버림)
  - ...으로 깊은 복사를 진행해야 기존에 정해둔 값이 변경되지 않음(속성만 복사하는 것, 전체 객체를 복사하는 것이 아님)




<details>
<summary>CLICK ME!</summary>  

- https://ordinary-code.tistory.com/22
</detials>  
