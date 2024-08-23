import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const TotalSalesChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/orders/total-sales`)
      .then((response) => {
        const data = response.data;
        console.log(response.data)

        const processedData = {
          labels: data.labels,
          datasets: [
            {
              label: "Total Sales",
              data: data.sales,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        };

        setChartData(processedData);
      })
      .catch((error) =>
        console.error("Error fetching total sales data:", error)
      );
  }, []);

  return (
    <div>
      <h2>Total Sales Over Time</h2>
      {chartData.labels ? <Line data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};

export default TotalSalesChart;
