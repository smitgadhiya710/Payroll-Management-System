import React, { useState } from 'react';

const SalaryForm = ({ onSubmit }) => {
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ salary });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className='mb-6'>
        <label className="block text-gray-700 text-sm font-bold mb-2">Enter Your Salary :</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'>
        Calculate
      </button>
    </form>
  );
};

export default SalaryForm;
