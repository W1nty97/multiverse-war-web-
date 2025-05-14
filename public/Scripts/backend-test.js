import pg from "pg";

const dbConfig = {
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "postgres",
};

const pool = new Pool(dbConfig);

import { express } from 'express';
const app = express();
import { bodyParser } from 'body-parser';

// Set up middleware to parse JSON requests
app.use(bodyParser.json());

// Define a route for our RESTful API endpoint
app.get('/api/users', (req, res) => {
  // Use the PostgreSQL pool to query the database
  const query = 'SELECT * FROM characters';
  dbPool.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching data' });
    } else {
      res.send(result.rows); // Send the response back to the client
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
