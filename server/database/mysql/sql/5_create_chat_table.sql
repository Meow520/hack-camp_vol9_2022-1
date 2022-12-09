CREATE TABLE `chats` (
  `id`          int          COLLATE utf8mb4_bin NOT NULL AUTO_INCREMENT,
  `message`     varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `size`        varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `room_id`     varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `member_id`   int          COLLATE utf8mb4_bin NOT NULL,
  `score`       float        COLLATE utf8mb4_bin NOT NULL,
  FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE,
  FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;