CREATE TABLE
    Movie (
        movie_id INTEGER not null primary key,
        director_id INTEGER,
        movie_name TEXT,
        lead_actor TEXT
    )
insert into
    Movie (movie_id, director_id, movie_name, lead_actor)
values
    (1, 4, 'Bahubali', 'prabhas'),
    (2, 8, 'Captain', 'Chris'),
    (3, 40, 'X Men', 'Hugh'),
    (4, 23, 'fiht', 'Brad');

create TABLE
    Director (director_id INTEGER, director_name TEXT)
insert into
    Director
values
    (4, 'SS R'),
    (20, 'Christopher'),
    (30, 'Suni')
drop TABLE Movie