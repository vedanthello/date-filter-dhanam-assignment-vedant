import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import FilterBar from "./components/FilterBar.js";
import EventItem from "./components/EventItem.js";
import { formatApiResponse } from "./formatApiResponse.js";
import dayjs from "dayjs";
const moment = require('moment');

let customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
const isYesterday = require('dayjs/plugin/isYesterday');
dayjs.extend(isYesterday);


function App() {

  const [allData, setAllData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {

    axios.get("https://www.gov.uk/bank-holidays.json")
      .then(res => {
        setAllData(formatApiResponse(res.data));
        setFilteredData(formatApiResponse(res.data));
      })
      .catch(err => {
        // handle API error
      });

  }, []);

  const implementFiltration = (dateFilterType, startDate, endDate) => {

    if (dateFilterType === "yesterday") {
      
      let fData = allData.filter(item => {
        return dayjs(item.date, "YYYY-MM-DD").isYesterday();
      });
      setFilteredData(fData);
      
    } else if (dateFilterType === "last-week") {

      const firstDayLastWeek = moment().subtract(1, 'weeks').startOf('week').format('YYYY-MM-DD');
      const lastDayLastWeek = moment().subtract(1, 'weeks').endOf('week').format('YYYY-MM-DD');

      let fData = allData.filter(item => {
        return moment(firstDayLastWeek).isSameOrBefore(item.date) && moment(item.date).isSameOrBefore(lastDayLastWeek);
      });
      setFilteredData(fData);

    } else if (dateFilterType === "last-month") {

      const firstDayLastMonth = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
      const lastDayLastMonth = moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD');

      let fData = allData.filter(item => {
        return moment(firstDayLastMonth).isSameOrBefore(item.date) && moment(item.date).isSameOrBefore(lastDayLastMonth);
      });
      setFilteredData(fData);

    } else if (dateFilterType === "custom-date-range") {
      
      let fData = allData;

      // fiter based on startDate
      if (startDate) {
        fData = fData.filter(item => {
          return moment(startDate).isSameOrBefore(item.date);
        });
      }

      // fiter based on endDate
      if (endDate) {
        fData = fData.filter(item => {
          return moment(item.date).isSameOrBefore(endDate);
        });
      }

      setFilteredData(fData);

    } else if (dateFilterType === "") {
      setFilteredData(allData);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3 bg-light">
          <FilterBar
            implementFiltration={implementFiltration}
          />
        </div>

        <div className="col-sm-9">
          <div className="row mt-5">
            {filteredData && filteredData.map((item, index) => (
              <EventItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
