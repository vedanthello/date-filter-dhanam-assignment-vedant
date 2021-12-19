import { useState } from "react";

const FilterBar = () => {
  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filter Using Date</h4>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="filter-date-type">Date Type</label>
        <select
          className="form-control"
          id="filter-date-type"
          // onChange={handleInput("filter-date-type")}
        >
          <option value="">Select</option>
          <option value="yesterday">Yesterday</option>
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
          <option value="custom-date-range">Custom Date Range</option>
        </select>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          // onChange={handleInput("from")}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="endDate">To</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          // onChange={handleInput("to")}
        />
      </div>
    </div>
  );
};

export default FilterBar;