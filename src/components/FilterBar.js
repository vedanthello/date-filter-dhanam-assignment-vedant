import { useState } from "react";

const FilterBar = ({ implementFiltration }) => {

  const [dateFilterType, setDateFilterType] = useState("");

  const handleInputChange = event => {
    const target = event.target;
  
    if (target.id === "date-filter-type") {
      setDateFilterType(target.value);
      implementFiltration(target.value);

    }
  };

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
            <input
              type="date"
              className="form-control"
              id="start-date"
            // onChange={handleInput("from")}
            />
          </div>

          <div className="col-sm-12 my-2">
            <label htmlFor="end-date">To</label>
            <input
              type="date"
              className="form-control"
              id="end-date"
            // onChange={handleInput("to")}
            />
          </div>
        </>
      }
    </div>
  );
};

export default FilterBar;