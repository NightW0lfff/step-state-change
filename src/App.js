import React, { useState } from "react";

function App() {
  const [isActive, setActive] = useState(true);

  const toggle_card = () => {
    setActive(!isActive);
  };

  return (
    <div className="main">
      <p className="toggle-btn" onClick={toggle_card}>
        X
      </p>
      <div className={`card ${isActive ? "" : "hidden"}`}>
        <Card />
      </div>
    </div>
  );
}

function Card() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step <= 2) setStep(step + 1);
  };
  const preStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="container">
      <div className="steps-container ">
        <Steps activate={step >= 1 ? "active" : ""} content="1" />
        <Steps activate={step >= 2 ? "active" : ""} content="2" />
        <Steps activate={step === 3 ? "active" : ""} content="3" />
      </div>
      <Content index={step} />
      <Buttons nextStep={nextStep} preStep={preStep} />
    </div>
  );
}

function Steps({ activate, content }) {
  return <h3 className={`step ${activate}`}>{content}</h3>;
}

function Content({ index }) {
  const content = [
    "Step 1: Learn React",
    "Step 2: Apply for a Job",
    "Step 3: Invest your money",
  ];

  return <p className="content">{content[index - 1]}</p>;
}

function Buttons({ nextStep, preStep }) {
  return (
    <div className="btn-container">
      <button className="previous" onClick={preStep}>
        Previous
      </button>
      <button className="next" onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default App;
