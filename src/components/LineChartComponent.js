import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { date: '6/30/2024', sales: 1404, orders: 4, avgOrderValue: 351.00 },
  { date: '7/7/2024', sales: 1200, orders: 3, avgOrderValue: 400.00 },
  { date: '7/14/2024', sales: 900, orders: 2, avgOrderValue: 450.00 },
  { date: '7/21/2024', sales: 600, orders: 1, avgOrderValue: 600.00 },
];

const LineChartComponent = () => (
  <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip formatter={(value, name) => {
            if (name === "orders") {
                return [`${value}`, "Orders"];
            }
            return [`$${value}`, "Sales"];
        }} />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#82ca9d" />
        <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default LineChartComponent;


