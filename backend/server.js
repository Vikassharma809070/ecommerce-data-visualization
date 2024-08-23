const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const ordersRoutes = require('./routes/orders');
const customersRoutes = require('./routes/customers');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/orders', ordersRoutes);
app.use('/api/customers', customersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
