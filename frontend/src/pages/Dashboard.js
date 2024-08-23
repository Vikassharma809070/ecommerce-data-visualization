import React from 'react';
import TotalSalesChart from '../components/TotalSalesChart';
import SalesGrowthChart from '../components/SalesGrowthChart';
import NewCustomersChart from '../components/NewCustomersChart';
import RepeatCustomersChart from '../components/RepeatCustomersChart';
import GeoDistributionMap from '../components/GeoDistributionMap';
import CLVByCohortsChart from '../components/CLVByCohortsChart';

const Dashboard = () => {
    return (
        <div>
            <h1>eCommerce Data Dashboard</h1>
            <TotalSalesChart />
            <SalesGrowthChart />
            <NewCustomersChart />
            <RepeatCustomersChart />
            <GeoDistributionMap />
            <CLVByCohortsChart />
        </div>
    );
};

export default Dashboard;
