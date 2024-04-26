import React, { useState } from "react";
import Chart from "react-apexcharts";

const PlacementElectrical = () => {
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
        data: [105,77,94,101,124,125],
      },
      {
        name: "Number of Students placed",
        data: [77,69,74,92,120,120],
      },
    
  ]);

  return (
    <div>
      <h1>
        Number of offers  B.tech.  Electrical && Electronics Engineering <i className="fas fa-user"></i>{" "}
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

export default PlacementElectrical;
