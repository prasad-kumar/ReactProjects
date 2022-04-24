import React, { useState, useEffect } from "react";

const Statewise = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://data.covid19india.org/data.json");
    const data = await response.json();
    setData(data.statewise);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="App">
      <h1>
        <span>INDIA</span> COVID-19 TRACKER
      </h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>LastUpdated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stateData, index) => {
              return (
                <tr className="table-row" key={index}>
                  <th className="state">{stateData.state}</th>
                  <td className="hover-blue">{stateData.confirmed}</td>
                  <td className="hover-green">{stateData.recovered}</td>
                  <td className="hover-red">{stateData.deaths}</td>
                  <td className="hover-green">{stateData.active}</td>
                  <td className="hover-green">{stateData.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statewise;
