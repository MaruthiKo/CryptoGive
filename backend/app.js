const express = require('express');
const cors = require('cors');
const app = express();

// Set up CORS
app.use(cors({origin: '*'}));

// ... other middleware and routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
