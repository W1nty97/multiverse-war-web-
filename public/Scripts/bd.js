// import pg from "pg";
// import { data } from "../../src/Main/filterPopup/data.js";

// const { Client } = pg;

// const client = new Client({
//   user: "postgres",
//   password: "postgres",
//   host: "localhost",
//   port: 5432,
//   database: "postgres",
// });

// await client.connect();

// await client.query("BEGIN"); // начинаем транзакцию

// const qInsChars = `INSERT INTO characters(id,name,version,element,type,rarity,story,strength,health,speed,mind,class_id,img)
//     VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`;
// try {
//   data.forEach(async (el) => {
//     await client.query(qInsChars, [
//       el.id,
//       el.name,
//       el.version,
//       el.element,
//       el.type,
//       el.rare,
//       "story",
//       el.strength,
//       el.health,
//       el.speed,
//       el.mind,
//       el.class,
//       el.img,
//     ]);
//   });
//   await client.query("COMMIT"); // говорим серверу постгрес, что мы закончили. если будет ошибка, отменится всё, что было выше с начала транзакции
// } catch (e) {
//   await client.query("ROLLBACK"); // поймали ошибку, говорим постгресу, что б всё отменил
//   throw e;
// } finally {
//   client.release; // отключаемся
// }
// await client.end(); // гасим клиента
