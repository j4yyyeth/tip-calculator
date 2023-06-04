import { useState } from "react";

const App = () => {

  const [ bill, setBill ] = useState(0);
  const [ percentage, setPercentage ] = useState(0);
  const [ selectedPercentage, setSelectedPercentage ] = useState(null);
  const [ people, setPeople ] = useState(0);
  const [ total, setTotal ] = useState(0.00);
  const [ tip, setTip ] = useState(0.00);

  const handleBill = (e) => {
    setBill(e.target.value);
  }

  const handleCustomTip = (e) => {
    setPercentage(e.target.value);
    setSelectedPercentage(null);
  }

  const handlePercentageClick = (value) => {
    setPercentage(value);
    setSelectedPercentage(value);
  }

  const handlePeople = (e) => {
    setPeople(e.target.value);
  }

  const reset = () => {
    const newTip = ((+(percentage) / 100) * +(bill)) / +(people);
    const newTotal = +(bill) / +(people) + newTip;
    setTip(newTip.toFixed(2));
    setTotal(newTotal.toFixed(2));
  } 

  return (
    <>
      <img id="logo" src="logo.svg" alt="logo"/>
      <div id="card">
        <div className="left-card">
          <label>Bill</label>
          <div className="input-container-bill">
            <input onChange={handleBill} className="bill-people-input" placeholder="0"></input>
          </div>
          <div className="tips">
          <label>Select Tip %</label>
          <div className="tips-buttons">
            <button className={selectedPercentage === 5 ? 'selected' : ''} onClick={() => handlePercentageClick(5)}>5%</button>
            <button className={selectedPercentage === 10 ? 'selected' : ''} onClick={() => handlePercentageClick(10)}>10%</button>
            <button className={selectedPercentage === 15 ? 'selected' : ''} onClick={() => handlePercentageClick(15)}>15%</button>
            <button className={selectedPercentage === 25 ? 'selected' : ''} onClick={() => handlePercentageClick(25)}>25%</button>
            <button className={selectedPercentage === 50 ? 'selected' : ''} onClick={() => handlePercentageClick(50)}>50%</button>
            <input onChange={handleCustomTip} className="custom-input" placeholder="Custom"></input>
          </div>
          </div>
          <label>Number of People</label>
          <div className="input-container-people">
            <input onChange={handlePeople} className="bill-people-input" placeholder="0"></input>
          </div>
        </div>
        <div className="right-card">
          <div className="result">
            <div className="tip-total-amount">
              <div className="dash-flex">
                <h3>Tip Amount</h3>
                <p>/ person</p>
              </div>
              <h1>${tip}</h1>
            </div>
            <div className="tip-total-amount">
              <div className="dash-flex">
                <h3>Total</h3>
                <p>/ person</p>
              </div>
              <h1>${total}</h1>
            </div>
          </div>
          <button onClick={reset} className="reset-button">Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;