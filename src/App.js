import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import FilterBar from "./components/FilterBar";
import { formatApiResponse } from "./formatApiResponse.js";

function App() {

  const [allData, setData] = useState(null);

  useEffect(() => {

    axios.get("https://www.gov.uk/bank-holidays.json")
      .then(res => {
        setData(formatApiResponse(res.data));
      })
      .catch(err => {
        // handle API error
      });

  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
           
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
