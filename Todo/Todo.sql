CREATE TABLE
    todo (
        id INTEGER not null primary key,
        data TEXT,
        category TEXT,
        priority TEXT,
        status TEXT,
        due_date DATE
    )
insert into
    todo (id, data, category, priority, status, due_date)
values
    (
        1,
        'Develop website',
        'WORK',
        'MEDIUM',
        'TO DO',
        '2024-03-02'
    ),
    (
        2,
        'Research new technologies',
        'LEARNING',
        'LOW',
        'DONE',
        '2021-09-22'
    ),
    (
        3,
        'Renovate kitchen',
        'HOME',
        'HIGH',
        'IN PROGRESS',
        '2022-05-19'
    ),
    (
        4,
        'Write article',
        'LEARNING',
        'HIGH',
        'TO DO',
        '2021-01-21'
    ),
    (
        5,
        'Prepare presentation',
        'WORK',
        'HIGH',
        'TO DO',
        '2021-01-21'
    ),
    (
        6,
        'Organize files',
        'HOME',
        'MEDIUM',
        'IN PROGRESS',
        '2022-05-19'
    ),
    (
        7,
        'Create marketing plan',
        'WORK',
        'LOW',
        'DONE',
        '2021-09-22'
    ),
    (
        8,
        'Review code',
        'LEARNING',
        'HIGH',
        'TO DO',
        '2024-03-02'
    ),
    (
        9,
        'Build prototype',
        'WORK',
        'HIGH',
        'TO DO',
        '2021-01-21'
    ),
    (
        10,
        'Plan family vacation',
        'HOME',
        'MEDIUM',
        'IN PROGRESS',
        '2022-05-19'
    ),
    (
        11,
        'Update documentation',
        'WORK',
        'LOW',
        'DONE',
        '2021-09-22'
    ),
    (
        12,
        'Design user interface',
        'LEARNING',
        'HIGH',
        'TO DO',
        '2024-03-02'
    ),
    (
        13,
        'Prepare project proposal',
        'WORK',
        'HIGH',
        'TO DO',
        '2021-01-21'
    ),
    (
        14,
        'Arrange furniture',
        'HOME',
        'MEDIUM',
        'IN PROGRESS',
        '2022-05-19'
    ),
    (
        15,
        'Write tutorial',
        'LEARNING',
        'LOW',
        'DONE',
        '2021-09-22'
    ),
    (
        16,
        'Develop mobile app',
        'WORK',
        'HIGH',
        'TO DO',
        '2024-03-02'
    ),
    (
        17,
        'Research market trends',
        'LEARNING',
        'HIGH',
        'TO DO',
        '2021-01-21'
    ),
    (
        18,
        'Setup home office',
        'WORK',
        'MEDIUM',
        'IN PROGRESS',
        '2022-05-19'
    ),
    (
        19,
        'Prepare budget report',
        'HOME',
        'LOW',
        'DONE',
        '2021-09-22'
    ),
    (
        20,
        'Schedule meetings',
        'WORK',
        'HIGH',
        'TO DO',
        '2021-01-21'
    );

DROP TABLE todo;