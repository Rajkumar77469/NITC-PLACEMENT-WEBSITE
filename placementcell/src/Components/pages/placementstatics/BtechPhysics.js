import React, { useState } from "react";
import Chart from "react-apexcharts";

const PlacementBtechPhysics = () => {
  const [options] = useState({
      colors: ["#000065", "#FF8C00"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
         categories: ["2017-2018", "2018-2019", "2019-2020", "2020-2021", "2021-2022", "2022-2023"],
      },
      yaxis: {
        categories: [0,50,100,150,200],
      },
    });
    const [series] = useState([
      {
        name: "Number of Students Registered",
        data: [12,10,8,11,13,14],
      },
      {
        name: "Number of Students placed",
        data: [3,7,5,6,13,12],
      },
    ]);

  return (
    <div>
      <h1>
        Number of Offers B.Tech. Engineering Physics <i className="fas fa-user"></i>{" "}
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

export default PlacementBtechPhysics;
