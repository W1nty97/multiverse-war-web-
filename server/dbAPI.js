import { Pool } from "pg";
import { dbConfig } from "../credentials.js";

const pool = new Pool(dbConfig);

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const checkLogin = async (login) => {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT id FROM users WHERE login = $1", [
      login,
    ]);
    return res.rows[0].id;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
};

export const registerUser = async (login, password) => {
  const client = await pool.connect();
  if (checkLogin(login)) {
    // === true необязательно
    return false;
  } else {
    try {
      const res = await client.query(
        "INSERT INTO users (login, password) VALUES ($1, $2) RETURNING id",
        [login, password]
      );
      return res.rows[0].id;
    } catch (err) {
      console.error(err);
      throw err;
    } finally {
      client.release();
    }
  }
};

export const loginUser = async (login, password) => {
  const client = await pool.connect();
  try {
    const res = await client.query(
      "SELECT id FROM users WHERE login = $1 AND password = $2", // id вместо звездочки, нам не нужна вся запись
      [login, password]
    );
    return res.rows.length > 0;
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
    return res.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
};
