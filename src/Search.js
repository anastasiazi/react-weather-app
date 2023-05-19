import React, { useState } from "react";

export default function Search(props) {
  const [city, setCity] = useState();

  function handleSubmit(event) {
    let city = event.target.city.value;
    event.preventDefault();
    props.searchCity(city);
  }

  return (
    <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city here"
            className="form-control placeholder-wave"
            id="city-input"
            name = "city"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
}
