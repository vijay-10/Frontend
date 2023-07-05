import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Result from './components/Result/Result';
import { useState } from 'react';

function App() {
  const yearlyData = [];
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
  
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form onFormSubmit={calculateHandler}/>
      {!userInput && <p className='investment-list__fallback'>No investment calculated yet.</p>}
      {userInput && <Result result={yearlyData} initialInvestment={userInput['current-savings']}/>} 
    </div>
  );
}

export default App;
