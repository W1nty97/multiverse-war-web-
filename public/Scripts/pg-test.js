import { Pool } from "pg";

const dbConfig = {
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "postgres",
};

const pool = new Pool(dbConfig);

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const client = await pool.connect();

const query = `SELECT characters.id,name,version,element,type,rarity,strength,health,speed,mind,img, classes.class_name FROM characters 
JOIN classes ON classes.id = characters.class_id`;
const res = await client.query(query);
console.log(res.rows[1]);

client.release();
