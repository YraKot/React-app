import React, { useState } from "react";

type ChartList =
  | "LineChart"
  | "AreaChart"
  | "BarChart"
  | "ComposedChart"
  | "PieChart"
  | "RadarChart";

const chartList: ChartList[] = [
  "LineChart",
  "AreaChart",
  "BarChart",
  "ComposedChart",
  "PieChart",
  "RadarChart",
];

export const SelectChart = () => {
  const [selectedChart, setSelectedChart] = useState<ChartList>("LineChart");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChart(event.target.value as ChartList);
  };

  return (
    <div>
      <h4>Chart Options</h4>
      <select id="select" value={selectedChart} onChange={handleChange}>
        {chartList.map((chart) => (
          <option key={chart} value={chart}>
            {chart}
          </option>
        ))}
      </select>
      <p>Selected: {selectedChart}</p>
    </div>
  );
};
