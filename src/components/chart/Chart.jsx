import React from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Total: 4000,
  },
  {
    name: "February",
    Total: 3000,
  },
  {
    name: "March",
    Total: 2000,
  },
  {
    name: "April",
    Total: 2780,
  },
  {
    name: "May",
    Total: 1890,
  },
  {
    name: "June",
    Total: 2390,
  },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stackId="1"
            stroke="gray"
            fill="#b9e303"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
