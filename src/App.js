import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

function App() {

  const [APIResponseData, setAPIResponseData] = useState(null);

  useEffect(() => {

    axios.get("https://www.gov.uk/bank-holidays.json")
      .then(res => {
        setAPIResponseData(res.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
