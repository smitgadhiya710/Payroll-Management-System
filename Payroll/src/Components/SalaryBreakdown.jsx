import React from 'react';

const SalaryBreakdown = ({ salary, savings, shopping }) => {
  return (
    <div>
      <h3>Salary Breakdown</h3>
      <p>Salary: {salary}</p>
      <p>Savings: {savings}</p>
      <p>Shopping: {shopping}</p>
    </div>
  );
};

export default SalaryBreakdown;
