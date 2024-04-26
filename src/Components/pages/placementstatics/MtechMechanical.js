import React, { useState } from "react";
import Chart from "react-apexcharts";

const PlacementMtechMechanical = () => {
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
        data: [71,51,58,66,104,101],
      },
      {
        name: "Number of Students placed",
        data: [8,20,20,21,85,74],
      },
    ]);


  return (
    <div>
      <h1>
        Number of offers  M.tech. programmes in Mechanical Engineering  <i className="fas fa-user"></i>{" "}
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

export default PlacementMtechMechanical;
