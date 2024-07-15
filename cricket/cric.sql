CREATE TABLE
    cricket_team (
        player_id INTEGER NOT NULL PRIMARY KEY,
        player_name TEXT,
        jersey_number INTEGER,
        role TEXT
    )
insert into
    cricket_team (player_id, player_name, jersey_number, role)
values
    (1, 'Rohit', 45, 'batsman'),
    (2, 'Dhoni', 32, 'bowler'),
    (3, 'Virat', 12, 'batsman'),
    (4, 'Sachin', 11, 'batsman'),
    (5, 'Bumrah', 2, 'bowler'),
    (6, 'Shikhar', 5, 'bowler');

DROP TABLE cricket_team;