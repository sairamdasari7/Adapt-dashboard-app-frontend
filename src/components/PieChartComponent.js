// src/components/PieChartComponent.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'WooCommerce Store', value: 44.2, color: '#2cded5' },
  { name: 'Shopify Store', value: 55.8, color: '#fa7e7e' },
];

const COLORS = ['#2cded5', '#fa7e7e'];

const PieChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    <div>
      {data.map((item, index) => (
        <div key={index} style={{ display: 'inline-flex', alignItems: 'center', marginRight: '20px' }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: item.color,
            marginRight: '8px',
          }}></div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  </ResponsiveContainer>
);

export default PieChartComponent;
