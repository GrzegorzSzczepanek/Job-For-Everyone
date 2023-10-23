# Besthacks Backend

```sql
CREATE TABLE users (
    id int PRIMARY KEY,
    username varchar(255),
    name varchar(255),
    lastname varchar(255),
    email varchar(255),
    pass_hash varchar(255),
    photo varchar(255),
    description text,
    education text,
    verified boolean
);

CREATE TABLE publications (
    id int PRIMARY KEY,
    title text,
    short_desc text,
    category varchar(255),
    file varchar(255)
);

CREATE TABLE authors (
     id int PRIMARY KEY,
     publication_ID int,
     user_ID int,
     FOREIGN KEY (publication_ID) REFERENCES publications(id),
     FOREIGN KEY (user_ID) REFERENCES users(id)
);

CREATE TABLE categories (
     id int PRIMARY KEY,
     user_ID int,
     category varchar(255),
     FOREIGN KEY (user_ID) REFERENCES users(id)
);

CREATE TABLE comments (
     id int PRIMARY KEY,
     user_ID int,
     publication_ID int,
     content text,
     verified boolean,
     category varchar(255),
     FOREIGN KEY (user_ID) REFERENCES users(id),
     FOREIGN KEY (publication_ID) REFERENCES publications(id)
);

CREATE TABLE replies (
     id int PRIMARY KEY,
     user_ID int,
     publication_ID int,
     reply text,
     FOREIGN KEY (publication_ID) REFERENCES publications(id),
     FOREIGN KEY (user_ID) REFERENCES users(id)
);

insert into users (username, pass_hash, email) values ("user1", "hash1", "email1");
insert into users (username, pass_hash, email) values ("user2", "hash2", "email2");
insert into publications (title, authors, categories, number_of_pages, file) values ("title1", "authors1", "categories1", 100, "file1");
insert into publications (title, authors, categories, number_of_pages, file) values ("title2", "authors2", "categories2", 200, "file2");


5 przykładowych użytkowników
INSERT INTO besthacks.users (id, username, name, lastname, email, password, photo, description, education, verified)
VALUES
    (1, 'janedoe', 'Jane', 'Doe', 'jane@example.com', 'hashed_password1', 'janedoe.jpg', 'Web developer', '{"school": "University of ABC", "degree": "Bachelor of Computer Science", "graduation_year": 2018}', true),
    (2, 'johnsmith', 'John', 'Smith', 'john@example.com', 'hashed_password2', 'johnsmith.jpg', 'Graphic designer', '{"school": "XYZ College", "degree": "Bachelor of Fine Arts", "graduation_year": 2019}', true),
    (3, 'susanbrown', 'Susan', 'Brown', 'susan@example.com', 'hashed_password3', 'susanbrown.jpg', 'Marketing specialist', '{"school": "123 University", "degree": "Master of Business Administration", "graduation_year": 2020}', false),
    (4, 'mikeross', 'Mike', 'Ross', 'mike@example.com', 'hashed_password4', 'mikeross.jpg', 'Software engineer', '{"school": "Tech Institute", "degree": "Master of Computer Science", "graduation_year": 2017}', true),
    (5, 'laurawilson', 'Laura', 'Wilson', 'laura@example.com', 'hashed_password5', 'laurawilson.jpg', 'Data analyst', '{"school": "Stats University", "degree": "Bachelor of Statistics", "graduation_year": 2021}', true);

5 przykładowych publikacji
INSERT INTO besthacks.publications (id, title, short_desc, category, file)
VALUES
    (1, 'How to Build a Website', 'A guide to creating websites from scratch', 'Web Development', 'website_guide.pdf'),
    (2, 'Graphic Design Essentials', 'Learn the basics of graphic design', 'Design', 'graphic_design.pdf'),
    (3, 'Marketing Trends 2022', 'Discover the latest marketing trends', 'Marketing', 'marketing_trends.pdf'),
    (4, 'Introduction to Machine Learning', 'A beginner-friendly guide to machine learning', 'Machine Learning', 'machine_learning_intro.pdf'),
    (5, 'Data Analysis Techniques', 'Explore data analysis methods', 'Data Science', 'data_analysis_techniques.pdf');

5 przykładowych komentarzy
INSERT INTO besthacks.comments (id, users_ID, publication_ID, content, verified, category)
VALUES
    (1, 1, 1, 'Great article!', true, 'General'),
    (2, 2, 1, 'I found this very helpful.', true, 'General'),
    (3, 3, 2, 'The design tips are fantastic!', true, 'Design'),
    (4, 4, 3, 'I\'d like more details on the marketing trends.', false, 'Marketing'),
    (5, 5, 4, 'This machine learning intro is clear and concise.', true, 'Machine Learning');

15 przykładowych odpowiedzi do komentarzy
INSERT INTO besthacks.replies (id, user_ID, publication_ID, reply)
VALUES
    (1, 2, 1, 'Thank you for the kind words!'),
    (2, 3, 1, 'I\'m glad you found it helpful.'),
    (3, 1, 2, 'I\'m pleased you liked the design tips!'),
    (4, 4, 3, 'I\'ll provide more details on the marketing trends soon.'),
    (5, 5, 4, 'If you have any questions about machine learning, feel free to ask!'),
    (6, 1, 1, 'You\'re welcome! Feel free to ask if you have any questions.'),
    (7, 2, 2, 'I\'m looking forward to more design tips.'),
    (8, 3, 3, 'I can\'t wait to see the updated marketing trends.'),
    (9, 4, 4, 'Thanks for your offer to help with machine learning questions.'),
    (10, 5, 5, 'Sure, I\'ll be sure to reach out with questions.'),
    (11, 1, 2, 'Design is my passion. Happy to share tips!'),
    (12, 2, 3, 'Marketing trends change fast; stay tuned for updates.'),
    (13, 3, 4, 'Machine learning is a fascinating field to explore.'),
    (14, 4, 5, 'I\'m here to help with any data analysis inquiries.'),
    (15, 5, 1, 'Your website guide was a great start for me!');

5 przykładowych kategorii 
INSERT INTO besthacks.categories (id, user_ID, category)
VALUES
    (1, 1, 'Web Development'),
    (2, 1, 'Graphic Design'),
    (3, 2, 'Marketing'),
    (4, 3, 'Machine Learning'),
    (5, 4, 'Data Science');

5 przykładowych list autorów
INSERT INTO besthacks.authors (id, publication_ID, user_ID)
VALUES
    (1, 1, 1),
    (2, 1, 2),
    (3, 2, 3),
    (4, 3, 4),
    (5, 4, 5);
```


/search

?query=xyz
?author=xyz
?category=xyz
?count=xyz
?page=xyz

[asdf]
fetch backend/search?query=xyz&page=1
