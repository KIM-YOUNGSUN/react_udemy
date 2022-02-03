---
date: 2021-02-01 Tuesday
---

# TIL

> **개인 공부_udemy class**
<br />

# react_basic

## react 프로젝트 분석
- index.js는 첫번째로 실행되는 파일
  - index.js에서 App.js를 불러오고 App.js에 여러 컴포넌트들을 import해서 불러오는 방식
- jsx : 자바스크립트 내에 있는 HTML 코드
  - HTML코드를 자바스크립트로 받아서 브라우저에서 작동하는 코드로 변형이 되어서 사용할 수 있음
- 리액트에서 컴포넌트는 자바스크립트의 함수일 뿐임
- div에 class명을 줄때에는 className으로 이름을 만들어 주어야 함
- return 외부에서 정의한 함수를 return 내부에서 부를때는 { } 안에다가 변수명을 넣어주면 됨
```js
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  
  return (
  <div className="expense-item">
    <div>{expenseDate.toISOString()}</div> // 숫자를 그냥 불러올 수 없기 때문에 toISOString()을 붙여줘야 숫자가 보여짐
    <div className="expense-item__description">
      <h2>{expenseTitle}</h2>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  </div>
  );
}
```



<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
