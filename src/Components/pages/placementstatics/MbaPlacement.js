import React, { useState } from "react";
import Chart from "react-apexcharts";

const PlacementMba = () => {
  const [options] = useState({
      colors: ["#000065", "#FF8C00"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
         categories: ["2017-2018", "2018-2019", "2019-2020", "2020-2021", "2021-2022", "2022-2023"],
      },
      yaxis: {
        categories: [0,100,200,300,400,500],
      },
    });
    const [series] = useState([
      {
        name: "Number of Students Registered",
        data: [36,25,31,30,38,33],
      },
      {
        name: "Number of Students placed",
        data: [18,19,18,21,22,28],
      },
    ]);
  

  return (
    <div>
      <h1>
        Number of offers - MBA <i className="fas fa-user"></i>{" "}
      </h1>
      <div className="row">
        <div className="col-4">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="750"
          />
        </div>
      </div>
    </div>
  );
};

export default PlacementMba;
