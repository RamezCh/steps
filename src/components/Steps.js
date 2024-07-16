import { useState } from 'react';
import { Button } from './Button';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

// State is data that changes over time. It's stored in variables that are declared using the useState hook.
export function Steps() {
  // Hooks start with use, and useState is a hook that lets you add state to your function components.
  // Hooks can only be called at the top level of your function components.
  // State Changed? React will re-render the component.
  // Frameworks exist to keep UI & Data in sync.
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const message = messages[step - 1];

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep(step + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            Step {step}: {message}
          </p>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈🏼</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉🏼</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
