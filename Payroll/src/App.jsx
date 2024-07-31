import React, { useState } from 'react';
import SalaryForm from './Components/SalaryForm';
import SalaryBreakdown from './Components/SalaryBreakdown';
import './App.css';

const App = () => {
  const [salary, setSalary] = useState(0);
  const [savings, setSavings] = useState(0);
  const [shopping, setShopping] = useState(0);
  const [homeexpensis, sethomeexpensis] = useState(0);
  const [emergency, setEmergency] = useState(0);

  const handleFormSubmit = ({ salary }) => {
    const salaryAmount = parseFloat(salary);
    const savingsAmount = Math.round(salaryAmount * 0.30);
    const shoppingAmount = Math.round(salaryAmount * 0.20);
    const homeexpensisAmount = Math.round(salaryAmount * 0.30);
    const emergencyAmount = Math.round(salaryAmount * 0.20);
  
    setSalary(salaryAmount);
    setSavings(savingsAmount);
    setShopping(shoppingAmount);
    sethomeexpensis(homeexpensisAmount);
    setEmergency(emergencyAmount);
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-background">
      <h1 className="text-6xl font-bold mb-8 text-white">Salary Divider</h1>
      <SalaryForm onSubmit={handleFormSubmit} />
      <SalaryBreakdown 
        salary={salary} 
        savings={savings} 
        shopping={shopping} 
        homeexpensis={homeexpensis} 
        emergency={emergency} 
      />
    </div>
  );
};


export default App;
