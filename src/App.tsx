import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import { InputChangeEventDetail } from './types';
import {
  testObj,
  formatForDisplay
} from './utils';

function App() {
  const [input, setInput] = useState(formatForDisplay(testObj));
  const [result, setResult] = useState('');

  const handleInputChange = (e: ChangeEvent<InputChangeEventDetail>) => {
    setInput(e.target.value);
  };

  const handleScrub = () => {
    setResult(formatForDisplay(input));
  };

  useEffect(() => {
    handleScrub();
  }, [input]);

  return (
      <>

        <div>
          <h3>INPUT JSON HERE</h3>
          <textarea
              value={input}
              onChange={handleInputChange}
          />
        </div>

        {input && result && <div>
            <h3>RESULT SHOWS HERE</h3>
            <textarea
                value={result}
                disabled={true}
            />
        </div>}

      </>
  );
}

export default App;
