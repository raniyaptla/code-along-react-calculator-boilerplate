import React, { useState } from 'react';
import '../App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEvaluate = () => {
    
      const newResult = eval(input);
      setResult(newResult);
      setInput(newResult.toString());
    
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  return (
    <div class="container">
      <h1 style={{color:'whitesmoke',paddingLeft:'70px'}}>CALCULATOR APP</h1>
      <div class="input">
        <input type="text" value={input} readOnly style={{ width: '45%', height: '80px', fontSize: '2.5rem', backgroundColor: 'grey'}}/>
      </div>
      <div>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleEvaluate()}>=</button>
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
