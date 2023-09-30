import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  console.log('NewExpense props', props);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log('expenseData',expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

