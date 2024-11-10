const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use(express.json());
app.use('/', indexRouter);
app.use('/api', apiRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));