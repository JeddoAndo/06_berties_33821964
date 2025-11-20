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
    '$2b$10$Rk5cbXP0pZSVm0PQUQ1ijdJFfxp4r9mM3i9FXE.NFrjIR3JghJCha'
);