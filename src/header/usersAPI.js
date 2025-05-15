// import { Client } from "pg";

export function valid_login(login) {
  return (  
    !/\s/.test(login) &&
    login.length >= 8 &&
    login.length <= 64 &&
    !/[а-яА-ЯёЁ]/.test(login)
  );
}
export function valid_pass(pass) {
  return (
    !/\s/.test(pass) &&
    pass.length >= 5 &&
    pass.length <= 20 &&
    !/[а-яА-ЯёЁ]/.test(pass)
  );
}

// const client = new Client({
//   user: "postgres",
//   password: "postgres",
//   host: "localhost",
//   port: 5432,
//   database: "postgres",
// });

// await client.connect();
// await client.query("BEGIN"); // начинаем транзакцию