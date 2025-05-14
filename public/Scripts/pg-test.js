import { Pool } from 'pg';

const dbConfig = {
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "postgres",
};

const pool = new Pool(dbConfig);

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})
 
const client = await pool.connect();

const query = 'SELECT * FROM characters';
const res = await client.query(query);
console.log(res.rows[0])
 
client.release()