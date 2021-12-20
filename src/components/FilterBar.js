import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  

const FilterBar = ({ implementFiltration }) => {

  const [dateFilterType, setDateFilterType] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleInputChange = event => {
    const target = event.target;
  
    if (target.id === "date-filter-type") {
      setDateFilterType(target.value);
      implementFiltration(target.value);
    }
  };

  useEffect(() => {
    if (dateFilterType === "custom-date-range") {
      implementFiltration(dateFilterType, startDate, endDate);
    }
  }, [startDate, endDate]);

  return (

    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filter Using Date</h4>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="date-filter-type">Date Type</label>
        <select
          className="form-control"
          id="date-filter-type"
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="yesterday">Yesterday</option>
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
          <option value="custom-date-range">Custom Date Range</option>
        </select>
      </div>


      {(dateFilterType === "custom-date-range") &&
        <>
          <div className="col-sm-12 my-2">
            <label htmlFor="start-date">From</label>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              placeholderText='YYYY-MM-DD'
              selected={startDate}
              isClearable
              showYearDropdown
              onChange={date => setStartDate(date)}
            />
          </div>

          <div className="col-sm-12 my-2">
            <label htmlFor="end-date">To</label>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              placeholderText='YYYY-MM-DD'
              selected={endDate}
              isClearable
              showYearDropdown
              onChange={date => setEndDate(date)}
            />
          </div>
        </>
      }
    </div>
  );
};

export default FilterBar;