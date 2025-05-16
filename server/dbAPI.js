import { Pool } from "pg";
import { dbConfig } from "../credentials.js"

const pool = new Pool(dbConfig);

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const getAllUsers = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT * FROM users");
    return res.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
};

export const getAllCharacters = async () => {
  const client = await pool.connect();
  try {
    const res =
      await client.query(`SELECT characters.id,name,version,element,type,rarity,strength,health,speed,mind,img, classes.class_name FROM characters 
        JOIN classes ON classes.id = characters.class_id`);
    console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
};
