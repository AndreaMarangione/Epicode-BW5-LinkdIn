const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { connDB } = require('./database/database');

connDB();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
