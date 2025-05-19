INSERT INTO classes (id, class_name) VALUES
  ('mythic','card-class-mythic'),
  ('cammon','card-class-cammon'),
  ('rare','card-class-rare'),
  ('epic','card-class-epic'),
  ('legend','card-class-legend');
INSERT INTO "characters" ("name","version","element","type",rarity,strength,health,speed,mind,class_id,img) VALUES
  ('Ермак','Рестлер','Души','Воин','Редкая',85,60,75,17,'rare','./imgData/ermacBoxer.png'),
  ('W1nty','Полный потенциал','Абсолют','Божество','Мифическая',99,99,99,99,'mythic','./imgData/w1ntFull.png'),
  ('Саб-Зиро','Ледниковый период','Лёд, Снег','Воин','Эпическая',95,32,25,40,'epic','./imgData/sub-zeroAgo.png'),
  ('Крок','Защитник Амазонки','Вода, Души','Воин','Эпическая',81,53,29,44,'epic','./imgData/crocClassic.png'),
  ('Саб-Зиро','Холодная война','Лёд, Снег','Воин','Эпическая',76,53,22,38,'epic','./imgData/sub-zeroCaldWar.png'),
  ('Барака','Классический','Нет','Воин','Обычная',60,48,34,20,'cammon','./imgData/barakaClassic.png'),
  ('Ктулху','Древний ужас','Вода','Божество','Эпическая',92,42,59,35,'epic','./imgData/ktulhuClassic.png'),
  ('Ермак','Последний герой','Души','Маг','Легендарная',81,73,68,50,'legend','./imgData/ermacHero.png'),
  ('Нуб Сайбот','Посланник смерти','Тени','Нежить','Эпическая',64,53,87,36,'epic','./imgData/noobSaibotDeath.png'),
  ('Нуб Сайбот','Классический','Тени','Нежить','Обычная',54,47,81,30,'cammon','./imgData/noobSaibotClassic.png');
INSERT INTO "characters" ("name","version","element","type",rarity,strength,health,speed,mind,class_id,img) VALUES
  ('Мистер Морж','Чумной фанат','Нет','Воин','Редкая',70,40,30,20,'rare','./imgData/misterWalrus.png'),
  ('Рептилия','Классический','Яд, Кислота','Воин','Обычная',63,34,71,14,'cammon','./imgData/reptileClassic.png'),
  ('Рейн','Классический','Вода','Воин','Обычная',51,46,76,28,'cammon','./imgData/rainClassic.png'),
  ('Саб-Зиро','Классический','Лёд, Снег','Воин','Обычная',55,51,45,40,'cammon','./imgData/sub-zeroClassic.png'),
  ('Рептилия','Проклятие горгоны','Каменный взор','Божество','Легендарная',67,46,23,34,'legend','./imgData/reptileGorgone.png'),
  ('Саб-Зиро','Посланник смерти','Лёд','Нежить','Эпическая',86,75,45,12,'epic','./imgData/sub-zeroDeath.png'),
  ('Сектор','Классический','Огонь','Кибер','Обычная',81,73,53,33,'cammon','./imgData/sektorClassic.png'),
  ('Саб-Зиро','Бурря','Лёд','Воин','Эпическая',70,50,20,37,'epic','./imgData/sub-zeroBur.png'),
  ('Саб-Зиро','Полярный','Лёд','Воин','Редкая',75,70,68,30,'rare','./imgData/sub-zeroPolar.png'),
  ('Саб-Зиро','Морозильник','Лёд','Кибер','Редкая',67,59,80,15,'rare','./imgData/sub-zeroCyber.png');
INSERT INTO "characters" ("name","version","element","type",rarity,strength,health,speed,mind,class_id,img) VALUES
  ('Скорпион','Гибрид','Огонь, Яд','Воин','Легендарная',70,63,65,20,'legend','./imgData/scorpionScorp.png'),
  ('Саб-Зиро','Подводный ледник','Лёд','Нежить','Легендарная',91,75,43,30,'legend','./imgData/sub-zeroWater.png'),
  ('Сайракс','Классический','Свет','Кибер','Обычная',60,59,70,33,'cammon','./imgData/sayraxClassic.png'),
  ('Скорпион','Посланник смерти','Огонь','Нежить','Легендарная',96,80,43,30,'legend','./imgData/scorpionDeath.png'),
  ('Скорпион','Зомби','Огонь','Нежить','Обычная',47,35,26,18,'cammon','./imgData/scorpionZombie.png'),
  ('Скорпион','Классический','Огонь','Воин','Обычная',56,50,55,30,'cammon','./imgData/scorpionClassic.png'),
  ('Смерть','Императрица тьмы','Души','Божество','Легендарная',90,77,52,85,'legend','./imgData/deathQueen.png'),
  ('W1nty','Другое будущее','Нет','Кибер','Легендарная',90,70,80,10,'legend','./imgData/w1ntyCyber.png'),
  ('Тремор','Классический','Земля, Камни','Воин','Обычная',81,70,30,18,'cammon','./imgData/tremorClassic.png'),
  ('Смоук','Классический','Ветер','Воин','Обычная',56,49,75,29,'cammon','./imgData/smokeClassic.png');
INSERT INTO "characters" ("name","version","element","type",rarity,strength,health,speed,mind,class_id,img) VALUES
  ('Рептилия','Посланник смерти','Яд, Кислота','Нежить','Эпическая',29,36,92,8,'epic','./imgData/reptileDeath.png'),
  ('Уран','Эхо войны','Нет','Кибер','Эпическая',92,53,39,33,'epic','./imgData/uranCyber.png'),
  ('Скорпион','Точка невозврата','Огонь','Нежить','Эпическая',86,50,30,34,'epic','./imgData/scorpionDemon.png'),
	('Скорпион','Перегрев системы','Огонь','Кибер','Эпическая',80,51,10,10,'epic','./imgData/scorpionCyber.png'),
  ('Скорпион','Священное пламя времён','Огонь','Воин','Редкая',60,50,80,21,'rare','./imgData/scorpionAgo.png'),
  ('Рейн','Плач королевы','Вода, Некромантия','Нежить','Эпическая',90,85,30,27,'epic','./imgData/rainCryQueen.png'),
  ('Мор','Алый Ужас','Кровь','Нежить','Легендарная',98,85,92,70,'legend','./imgData/morClassic.png'),
  ('W1nty','Классический','Нет','Воин','Обычная',50,50,50,50,'cammon','./imgData/w1ntyСlassic.png'),
  ('Рептилия','Ядовитый клинок','Яд, Кислота','Кибер','Редкая',75,36,80,50,'rare','./imgData/reptileCyber.png'),
  ('Ермак','Баг','Души','Маг','Легендарная',36,57,99,89,'legend','./imgData/ermacError.png');
INSERT INTO "characters" ("name","version","element","type",rarity,strength,health,speed,mind,class_id,img) VALUES
  ('Ермак','Дух глубин','Души','Маг','Эпическая',86,91,40,15,'epic','./imgData/ermacWater.png'),
  ('Рептилия','Болотный ящер','Яд, Кислота','Воин','Редкая',56,30,66,10,'rare','./imgData/reptileAgo.png'),
  ('Саб-Зиро','Зомби','Лёд','Нежить','Обычная',46,40,23,18,'cammon','./imgData/sub-zeroZombie.png'),
  ('JavaScript','Классический','Кодинг .js','Кибер','Легендарная',68,30,85,99,'legend','./imgData/JSClassic.png'),
  ('Ермак','Духи доисторических лет','Души','Маг','Легендарная',93,78,50,12,'legend','./imgData/ermacDino.png'),
  ('Ермак','Навеки проклятый','Души','Нежить','Редкая',55,80,60,80,'rare','./imgData/ermacFacer.png'),
  ('Ермак','Классический','Души','Маг','Обычная',48,87,30,55,'cammon','./imgData/ermacClassic.png'),
  ('Ермак','Зомби','Души','Нежить','Обычная',37,70,10,9,'cammon','./imgData/ermacZombie.png'),
  ('Ермак','Нано-шаман','Души','Кибер','Эпическая',52,90,75,35,'epic','./imgData/ermacCyber.png'),
  ('Ермак','Симбиот','Души','Нежить','Эпическая',92,89,75,15,'epic','./imgData/ermacVenom.png');
