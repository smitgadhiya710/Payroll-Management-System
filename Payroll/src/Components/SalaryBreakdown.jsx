import React from 'react';


const SalaryBreakdown = ({ salary, savings, shopping, homeexpensis, emergency }) => {
  return (
    <div className='breakdown-container max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg mt-6 text-left relative'>
      <h2 className='text-2xl font-bold mb-4 text-gray-700'>Salary Breakdown</h2>
      <div className='mb-4 text-lg font-medium text-gray-600'>
        <p>Salary: <span className='text-gray-800'>{salary} Rs</span></p>
        <p>Savings: <span className='text-gray-800'>{savings} Rs</span></p>
        <p>Shopping: <span className='text-gray-800'>{shopping} Rs</span></p>
        <p>Home Expenses: <span className='text-gray-800'>{homeexpensis} Rs</span></p>
        <p>Emergency: <span className='text-gray-800'>{emergency} Rs</span></p>
      </div>
    </div>
  );
};

export default SalaryBreakdown;
