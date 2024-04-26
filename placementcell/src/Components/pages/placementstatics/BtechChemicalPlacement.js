import React, { useState } from "react";
import Chart from "react-apexcharts";

const PlacementChemical = () => {
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
        data: [58,45,54,42,80,84],
      },
      {
        name: "Number of Students placed",
        data: [32,38,45,33,70,74],
      },
  ]);

  return (
    <div>
      <h1>
        Number of offers  B.tech. Chemical Engineering <i className="fas fa-user"></i>{" "}
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

export default PlacementChemical;
