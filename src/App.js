// src/App.js
import React from 'react';
import LineChartComponent from './components/LineChartComponent';
import PieChartComponent from './components/PieChartComponent';
import './App.css';

const App = () => (
  <div className="dashboard">
    <aside className="sidebar">
      <h2 className='sidedashboard-heading'>Dashboard</h2>
      <ul className='sidedashboard-styling'>
        <li>Inventory</li>
        <li>Order</li>
        <li>Returns</li>
        <li>Customers</li>
        <li>Shipping</li>
        <li>Channel</li>
        <li>Integrations</li>
        <li>Calculators</li>
        <li>Reports</li>
        <li>Account</li>
      </ul>
    </aside>
    <main className="main-content">
      <header className='dashboard-container'>
        <h2 >Dashboard</h2>
      </header>
      <section className="charts">
        <div className="chart-container">
          <h3>Sales vs Orders</h3>
          <LineChartComponent />
        </div>
        <div className="chart-container">
          <h3>Portion of Sales</h3>
          <PieChartComponent />
        </div>
      </section>
    </main>
  </div>
);

export default App;
