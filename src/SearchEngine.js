import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <div className="form-row">
          <div className="col-4">
            <input
              type="search"
              placeholder="Enter a city..."
              className="search-input w-100"
              autocomplete={false}
              autofocus={true}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="submit-button" />
          </div>
          <div className="col-5">
            <input
              type="submit"
              value="Check current location"
              className="button-search-current"
            />
          </div>
        </div>
      </form>
      <div className="city-and-time row">
        <div className="col-6">
          <h3 className="city-header">
            <strong>Amsterdam</strong>
          </h3>
        </div>
        <div className="col-6">
          <div className="last-updated-time">
            <div className="current-time">Friyay 14:00</div>
            <div className="text-last-updated">(last updated)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
