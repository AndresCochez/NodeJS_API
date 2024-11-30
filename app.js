const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const authenticate = require('./middleware/auth');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

app.use(express.json());
app.use(logger);
app.use(authenticate);
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

// Error handling
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));