-- DROP TABLE IF EXISTS "characters";
-- DROP TABLE IF EXISTS "users";
-- DROP TABLE IF EXISTS "classes";
CREATE TABLE IF NOT EXISTS classes (
 id varchar(64) NOT NULL,
 class_name varchar(64) NOT NULL,
 CONSTRAINT classes_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
 id int2 NULL,
 "name" varchar(128) NULL,
 login varchar(128) NULL,
 "password" varchar(128) NULL
);

CREATE TABLE IF NOT EXISTS "characters" (
 id smallserial NOT NULL,
 "name" varchar(64) NOT NULL,
 "version" varchar(64) NOT NULL,
 "element" varchar(64) NOT NULL,
 "type" varchar(64) NOT NULL,
 rarity varchar(64) NOT NULL,
 strength int2 NOT NULL,
 health int2 NOT NULL,
 speed int2 NOT NULL,
 mind int2 NOT NULL,
 class_id varchar(64) NOT NULL,
 img varchar(128) NOT NULL,
 CONSTRAINT characters_pkey PRIMARY KEY (id),
 CONSTRAINT class_ref FOREIGN KEY (class_id) REFERENCES classes(id)
);