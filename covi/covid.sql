CREATE TABLE
    state (
        state_id INTEGER not null primary key,
        state_name TEXT,
        population INTEGER
    )
insert into
    state (state_id, state_name, population)
values
    (1, 'Telangana', 12345),
    (2, 'Haryana', 6235),
    (3, 'Madya', 90598),
    (4, 'Raja', 957),
    (5, 'west Ben', 43567);

drop TABLE state;

CREATE TABLE
    District (
        district_id INTEGER not null primary key,
        district_name TEXT,
        state_id INTEGER,
        cases INTEGER,
        cured INTEGER,
        active INTEGER,
        deaths INTEGER
    );

insert into
    district (
        district_id,
        district_name,
        state_id,
        cases,
        cured,
        active,
        deaths
    )
values
    (101, 'Warangal', 1, 123456, 345, 200, 23),
    (102, 'Karimnaga', 1, 435553, 45, 00, 3),
    (106, 'Ranchi', 2, 234, 0, 0, 1),
    (103, 'Hyderabad', 1, 32421, 33, 12, 1),
    (105, 'Maha', 3, 33324, 34345, 20320, 523),
    (104, 'Natkar', 3, 343213, 4445, 760, 13);