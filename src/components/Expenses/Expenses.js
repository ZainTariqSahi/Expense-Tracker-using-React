import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear
  })

  
  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
       <ExpensesList items={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
