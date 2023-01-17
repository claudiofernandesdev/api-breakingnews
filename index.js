const express = require('express');
const userRoute = require('./src/routes/user.route');
const app = express();
const port = 3000;

app.use('/home', userRoute);
  
  app.listen(port);