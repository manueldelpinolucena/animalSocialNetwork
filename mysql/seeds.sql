DROP TABLE IF EXISTS relation;
DROP TABLE IF EXISTS user;
CREATE TABLE user (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(40) NOT NULL UNIQUE,
  email VARCHAR(64) UNIQUE NOT NULL UNIQUE,
  password VARCHAR(64)NOT NULL,
  latitude DECIMAL(12,9),
  longitude DECIMAL(12,9),
  language VARCHAR(3) DEFAULT "ES"
);
CREATE table relation (
   user_id1 INT NOT NULL,
   user_id2 INT NOT NULL,
   PRIMARY KEY(user_id1, user_id2),
   FOREIGN KEY(user_id1) REFERENCES user(user_id) ON DELETE CASCADE,
   FOREIGN KEY (user_id2) REFERENCES user(user_id) ON DELETE CASCADE
);
INSERT INTO user(username, email, password, latitude, longitude, language)
VALUES('hochiminh', 'hochiminhvietnam@example.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 10.762622, 106.660172, "EN");
INSERT INTO user(username, email, password, latitude, longitude, language)
VALUES('juan', 'juanaustralia@example.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', -33.865143, 151.209900, "EN");
INSERT INTO user(username, email, password, latitude, longitude, language)
VALUES('naomi', 'naomipasadena@example.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 34.156113, -118.131943, "EN");
INSERT INTO user(username, email, password, latitude, longitude, language)
VALUES('dimitri', 'dimitrimoscow@example.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 55.751244,  37.618423, "EN");

INSERT INTO relation VALUES(4,1);
INSERT INTO relation VALUES(4,2);
INSERT INTO relation VALUES(4,3);
INSERT INTO relation VALUES(3,2);