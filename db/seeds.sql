INSERT INTO users (username) VALUES ('najib');

INSERT INTO polls (user_id, query, number_of_options) VALUES (1, 'What is your favorite color among the following?', 5);

INSERT INTO options (poll_id, text) VALUES (1, 'Blue');
INSERT INTO options (poll_id, text) VALUES (1, 'Green');
INSERT INTO options (poll_id, text) VALUES (1, 'Yellow');
INSERT INTO options (poll_id, text) VALUES (1, 'Orange');
INSERT INTO options (poll_id, text) VALUES (1, 'Red');