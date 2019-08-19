//import express
const express = require('express');
const bodyParser = require('body-parser');
// register the routes
const pricegetRoutes = require('./routes/priceget');
// create express app
const app = express();
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Aceess-Controll-Allow_Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
  })

  app.get('/', (req, res) => {
    res
      .status(200)
      .send('Hello, world!')
      .end();
  });
app.use('/price', pricegetRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
