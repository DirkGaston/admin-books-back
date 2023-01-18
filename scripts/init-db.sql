-- create database
CREATE DATABASE admin_books;

-- connect to database
\c admin_books;

-- Create table books
CREATE TABLE books (
    id SERIAL,
    title VARCHAR(250),
    authors VARCHAR(250),
    average_rating NUMERIC,
    isbn VARCHAR(250),
    isbn13 VARCHAR(250),
    language_code VARCHAR(30),
    num_pages INTEGER,
    ratings_count INTEGER,
    text_reviews_count INTEGER,
    publication_date VARCHAR(120),
    publisher VARCHAR(120)
);

-- Add Harry Potter book
INSERT INTO books VALUES (
    DEFAULT,
    'Harry Potter and the Half-Blood Prince (Harry Potter  #6)',
    'J.K. Rowling/Mary GrandPré',
    4.57,
    0439785960,
    9780439785969,
    'eng',
    652,
    2095690,
    27591,
    '9/16/2006',
    'Scholastic Inc.'
);
