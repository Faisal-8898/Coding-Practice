create TABLE course
(
    id     INT     NOT NULL,
    name   VARCHAR NOT NULL,
    author VARCHAR NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE book
(
    book_id           int     not null,
    publisher_address varchar not null,
    primary key (book_id)
);
