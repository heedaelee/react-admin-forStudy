import React from "react";
import {
  Line, LineChart, ResponsiveContainer, Tooltip, XAxis
} from "recharts";
import "./chart.css";

export default function Chart({ title, data, dataKey }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#092535" />
          <Line type="monotone" dataKey={dataKey} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
