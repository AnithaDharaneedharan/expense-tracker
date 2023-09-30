import React, {useState} from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  console.log('props in Expenses', props)

  const [selectedYear, setSelectedYear] = useState('2020');

  const handleSelectedYear = (year) => {

      setSelectedYear(year);

  }

  const filteredItem = props.items.filter(item => {

    return item.date.toString().includes(selectedYear)
  });

  return (

    <Card className="expenses">
      <ExpensesFilter onSelectYear={handleSelectedYear} selectedYear={selectedYear}/> 
     {
       filteredItem.map(item => (
          <ExpenseItem
            key={item.title}
            title={item.title}
            amount={item.amount}
            date={item.date}
            />
  
         )
       )
     }

    </Card>

  );
}

export default Expenses;



// npm i body-parser cors dotenv express-jwt express-validator google-auth-library jsonwebtoken mongoose morgan @sendgrid/mail