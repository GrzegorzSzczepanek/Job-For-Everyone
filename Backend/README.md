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
```


/search

?query=xyz
?author=xyz
?category=xyz
?count=xyz
?page=xyz

[asdf]
fetch backend/search?query=xyz&page=1
