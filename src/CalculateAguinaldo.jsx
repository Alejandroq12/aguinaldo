import React, { useState } from "react";
import "./CalculateAguinaldo.css";


function CalculateAguinaldo() {
const [seniority, setSeniority] = useState("");
const [salary, setSalary] = useState("");
const [aguinaldo, setAguinaldo] = useState(0);
const [error, setError] = useState("");

const handleSeniorityChange = (e) => {
const seniority = e.target.value;
setSeniority(seniority);
};

const handleSalaryChange = (e) => {
const salary = e.target.value;
setSalary(salary);
};

const calculate = () => {
if (isNaN(seniority) || isNaN(salary)) {
setError("Invalid input. Seniority and salary must be numbers.");
return;
}
// Calculate the number of days of bonus based on seniority
let daysOfBonus;
if (seniority >= 1 && seniority <= 3) {
  daysOfBonus = 15;
} else if (seniority > 3 && seniority <= 10) {
  daysOfBonus = 19;
} else if (seniority > 10) {
  daysOfBonus = 21;
}

// Calculate the total bonus amount
const bonusAmount = salary * daysOfBonus / 30;
setAguinaldo(bonusAmount);
};

return (
<div className="calculate-aguinaldo">
<h1 className="calculate-aguinaldo__title">Calculate Aguinaldo</h1>
<form className="calculate-aguinaldo__form">
<label htmlFor="seniority" className="calculate-aguinaldo__label">
Seniority (in years):
</label>
<br />
<input
       type="number"
       id="seniority"
       className="calculate-aguinaldo__input"
       value={seniority}
       onChange={handleSeniorityChange}
     />
<br />
<label htmlFor="salary" className="calculate-aguinaldo__label">
Salary (in USD):
</label>
<br />
<input
       type="number"
       id="salary"
       className="calculate-aguinaldo__input"
       value={salary}
       onChange={handleSalaryChange}
     />
<br />
<button
       type="button"
       className="calculate-aguinaldo__button"
       onClick={calculate}
     >
Calculate Aguinaldo
</button>
</form>
{error && <p>{error}</p>}
{aguinaldo !== 0 && <p>Your aguinaldo is: ${aguinaldo.toFixed(2)}</p>}
</div>
);
}

export default CalculateAguinaldo;