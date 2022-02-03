---
date: 2021-02-03 Thursday
---

# TIL

> **개인 공부_udemy class**
<br />

# react_grammar - props, props.children

## ⭐props
- 맞춤 컴포넌트에 프로퍼티를 설정할 수 있음
- 컴포넌트를 재사용할 수 있게 해줌
- 다른 컴포넌트에서 또다른 컴포넌트로 데이터를 보낼수 있도록 함
```js
App.js

import ExpenseItem from './components/ExpenseItem'

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}>
      </ExpenseItem>

      <ExpenseItem
      title={expenses[1].title} 
      amount={expenses[1].amount} 
      date={expenses[1].date}>
      </ExpenseItem>

      <ExpenseItem
      title={expenses[2].title} 
      amount={expenses[2].amount} 
      date={expenses[2].date}>
      </ExpenseItem>

      <ExpenseItem
      title={expenses[3].title} 
      amount={expenses[3].amount} 
      date={expenses[3].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
```
---

```js
ExpenseItem.js

import './ExpenseItem.css';

function ExpenseItem(props) { // props로 App.js의 컴포넌트를 가져옴
  
  return (
  <div className="expense-item">
    <div>{props.date.toISOString()}</div>
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  </div>
  );
}

export default ExpenseItem;
```
---

## ⭐컴포지션(children prop)
- 여러 컴포넌트들을 원하는 폴더에서 불러서 사용하는 것
- 작은 빌딩 블록을 모아서 사용자 인터페이스를 만드는 것
- 컴포넌트를 합칠 때 컴포지션을 사용하는데 그것이 props.children(Wrapper component를 만든다고 생각하면 됨)
  - 이미 만들어진 컴포넌트들을 이미 감싸고 있는 div 대신에 컴포지션으로 감싸면 모든 컴포넌트를 동일하게 적용시킬 수 있음




<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
