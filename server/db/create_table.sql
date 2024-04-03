CREATE TABLE
  Books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    book_title VARCHAR(30) NOT NULL,
    book_description VARCHAR(255) NOT NULL,
    book_price FLOAT (5, 2) NOT NULL,
    book_cover_link VARCHAR(255) NOT NULL
  );