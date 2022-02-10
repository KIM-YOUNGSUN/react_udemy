import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '', 
  //   enteredAmount: '', 
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  //   setUserInput((prevState) => {
  //     return {...prevState, enteredTitle: event.target.value};
  //   });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
    setEnteredTitle(''); // 밑에 내용이 실행되고 다시 처음으로 리셋 시켜줌
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text' 
            value={enteredTitle} // 입력 후 제출하면 적었던 내용이 사라지게 만들어줌(기본 속성의 값을 넣어 원래의 상태로 돌리는 것)
            onChange={titleChangeHandler} 
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type='number' 
            min="0.01" 
            step="0.01" 
            value={enteredAmount}
            onChange={amountChangeHandler} 
            />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input 
            type='date' 
            min="2019-01-01" 
            max="2022-12-31" 
            value={enteredDate}
            onChange={dateChangeHandler} 
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="submit" onClick="">Add Expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm;