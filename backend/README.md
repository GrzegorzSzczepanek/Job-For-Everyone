# BACKEND Kicior Blancior


# DB
```sql
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255),
    password TEXT,
    phone_number VARCHAR(15),
    description TEXT,
    cv TEXT,
    img LONGBLOB
);

CREATE TABLE joboffers(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employer varchar(255),
    description varchar(10240),
    employer_logo varchar(255),
    job_title varchar(255),
    category varchar(255),
    type_of_employment varchar(255),
    offer_type varchar(255),
    email varchar(255),
    location varchar(255),
    excluded_disabilities varchar(255),
    salary_min INT,
    salary_max INT
);
```

inserts
```sql
INSERT INTO users (id, name, surname, email, password, phone_number, description, cv, img)
VALUES
    (1, 'John', 'Doe', 'john@example.com', 'hashed_password', '123-456-7890', 'A software developer', 'cv', NULL),
    (2, 'Jane', 'Smith', 'jane@example.com', 'another_password', '555-123-4567', 'Web Developer', 'cv', NULL),
    (3, 'Alice', 'Johnson', 'alice@example.com', 'secure_password', '987-654-3210', NULL, 'cv', NULL),
    (4, 'Bob', 'Williams', 'bob@example.com', 'strong_password', NULL, NULL, 'cv', NULL),
    (5, 'Eva', 'Brown', 'eva@example.com', 'complex_password', '111-222-3333', 'Data Analyst', 'cv', NULL);

INSERT INTO joboffers (id, employer, description, employer_logo, job_title, category, type_of_employment, offer_type, email, location, excluded_disabilities, salary_min, salary_max)
VALUES
  (1, 'Tech Innovations Inc.', 'Senior Software Engineer with expertise in AI and Machine Learning', 'logo1.png', 'Information Technology', 'Data Science', 'Remote', 'Umowa o pracę', 'asdf@gmail.com', 'Global', 'Blind', 80000, 100000),
  (2, 'Data Analytics Co.', 'Data Scientist with strong analytical skills', 'logo1.png', 'Data Science', 'Data Science', 'Stationary', 'Umowa o pracę', 'asdf@gmail.com', 'New York', 'Blind, ADHD', 70000, 90000),
  (3, 'Design Creations Ltd', 'Graphic Designer for creative branding projects', 'logo1.png', 'Design', 'Data Science', 'Stationary', 'Umowa o pracę', 'asdf@gmail.com', 'Los Angeles', 'Blind', 55000, 75000),
  (4, 'Healthcare Solutions', 'Medical Research Scientist for vaccine development', 'logo1.png', 'Medical Research', 'Data Science', 'Remote', 'Umowa o pracę', 'asdf@gmail.com', 'Global', 'Blind', 90000, 120000),
  (5, 'Financial Consulting Group', 'Financial Analyst for investment planning', 'logo1.png', 'Finance', 'Data Science', 'Stationary', 'Umowa o pracę', 'asdf@gmail.com', 'Chicago', 'Blind', 60000, 80000);
```

drops
```sql
DROP TABLE users;
DROP TABLE joboffers;
```
