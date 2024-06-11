const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { connDB } = require('./database/database');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const meRoute = require('./routes/me');
const postsRoute = require('./routes/posts');
const errorHandler = require('./middlewares/errorHandler');

connDB();
app.use(cors());
app.use(express.json());
app.use('/', registerRoute);
app.use('/', loginRoute);
app.use('/', meRoute);
app.use('/', postsRoute);
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
