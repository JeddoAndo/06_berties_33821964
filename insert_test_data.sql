# Insert data into the tables

USE berties_books;

INSERT INTO books (name, price)VALUES('Brighton Rock', 20.25),('Brave New World', 25.00), ('Animal Farm', 12.99) ;

# Insert default user for lab marking

INSERT INTO users (username, first, last, email, hashedPassword)
VALUES (
    'gold',
    'Gold',
    'Smiths',
    'gold@example.com',
    '$2a$10$SR62f5AQJZ5cZ4fzY4n6peJVIX4EggHD6Kyzm63y/J4iQ3ggnudYy'
);