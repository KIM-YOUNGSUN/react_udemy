---
date: 2021-02-04 Friday ~ 2021-02-08 Tuesday
---

# TIL

> **개인 공부_udemy class**
<br />

# react_grammar - Event & State

## Event 
- onClick={변수명} : 버튼을 클릭시 이벤트 발생 (상단에 함수를 선언한 다음에 불러옴)

## State
- useState
  - 사용방법 : 
  ```js
  const ExpenseItem = (props) => {
  // useState는 값 자체(title)와 업데이트 함수(setTitle)의 값을 돌려 받음
  const [title, setTitle] = useState(props.title);

  // 함수가 변할때마다 업데이트 함수를 불러오고, 상태값을 사용할 때마다 첫번째 요소를 사용
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
  <Card className="expense-item">
    <ExpenseDate date={props.date} />
    <div className="expense-item__description"> 
      <h2>{title}</h2> // 여기가 첫번째 요소
      <div className="expense-item__price">${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
  </Card>
      );
    }
  }
  ```
  - 컴포넌트가 다시 랜더링이 되어도 state 값이 그대로 유지
  - 이벤트 핸들러에서 호출이 가능
  - 일반 변수는 성공하지 못하지만 State를 사용하면 값을 설정하고 바꿀 수 있고 변화가 생기면 State가 등록된 곳에 컴포넌트를 재실행 시킴(State를 적용시킨 컴포넌트만!)
  - State는 컴포넌트 인스턴스 기반 단위로 나누어져 있음
    - 개별적으로 실행이 되기 때문에 같은 컴포넌트를 여러번 실행하더라도 다른 내용이 실행될 수 있게 해줌

## 여러 State 사용하기
- 컴포넌트마다 하나 이상의 state를 가질 수 있음
  - 각각의 state를 수정해도 다른 state에 영향을 주지 않음
```js
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
```
## 여러 State 사용 대안 1
- 여러개의 State를 사용해도 되지만 불필요함을 줄이기 위한 대안
  - 객체로 3가지의 state를 한꺼번에 불러오기
  - 동시에 많은 state를 업데이트 하게 되면 오래되거나 잘못된 state에 의존할 수도 있음(대안 2 활용)
```js
const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '', 
    enteredAmount: '', 
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
// ...userInput ➡ 세개를 객체로 한꺼번에 가져왔기 때문에 한가지만 변경해줄 경우 그저 새것으로 업데이트만 되기 때문에 나머지 애들도 가져오기 위해 작성(3가지 중 1가지만 반영되면 나머지가 사라져버림)
```

## 여러 State 사용 대안 2
- 모든 계획된 state 업데이트를 기억해두고 최신의 것으로 업데이트 되어 실행시켜줌
```js
const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value};
    });
  };
```



<details>
<summary>CLICK ME!</summary>  

- https://ordinary-code.tistory.com/120
</detials>  
