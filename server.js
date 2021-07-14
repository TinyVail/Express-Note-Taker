  
const express = require('express');

const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

// setting vars
const PORT = process.env.PORT || 3001;
const app = express();

// routes and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);

// finally 
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
})