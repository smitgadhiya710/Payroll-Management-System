import React, { useState, useEffect } from 'react';
import SalaryForm from './Components/SalaryForm'
import SalaryBreakdown from './Components/SalaryBreakdown'
import './App.css';

const App = () => {
  const [salary, setSalary] = useState(0);
  const [savings, setSavings] = useState(0);
  const [shopping, setShopping] = useState(0);

 

  const handleFormSubmit = ({ salary }) => {
    const salaryAmount = parseFloat(salary);
    const savingsAmount = salaryAmount * 0.2;
    const shoppingAmount = salaryAmount * 0.8;

    setSalary(salaryAmount);
    setSavings(savingsAmount);
    setShopping(shoppingAmount);

  };

  return (
    <div className="App">
      <h1>Salary Divider</h1>
      <SalaryForm onSubmit={handleFormSubmit} />
      <SalaryBreakdown salary={salary} savings={savings} shopping={shopping} />
    </div>
  );
};

export default App;
