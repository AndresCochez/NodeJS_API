const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');

app.use(express.json());
app.use(logger);
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));