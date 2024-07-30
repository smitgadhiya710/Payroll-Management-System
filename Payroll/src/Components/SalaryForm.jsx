import React, { useState } from 'react';

const SalaryForm = ({ onSubmit }) => {
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ salary });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Salary: </label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default SalaryForm;
