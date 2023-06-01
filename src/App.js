const App = () => {
  return (
    <>
      <img id="logo" src="logo.svg" alt="logo"/>
      <div id="card">
        <div className="left-card">
          <label>Bill</label>
          <div className="input-container">
            <input className="bill-people-input" placeholder="0"></input>
          </div>
          <div className="tips">
          <label>Select tip %</label>
          <div className="tips-buttons">
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <input className="custom-input" placeholder="Custom"></input>
          </div>
          </div>
          <label>Number of People</label>
          <div className="input-container">
            <input className="bill-people-input" placeholder="0"></input>
          </div>
        </div>
        <div className="right-card">
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default App;
