use radiologger;

drop table users;
drop table sites;
drop table publications;

create table users
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    username varchar(20),
    password_hash varchar(100),
    full_name varchar(50)
);

create table sites
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    url varchar(100),
    
);