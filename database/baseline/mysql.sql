use radiologger;

drop table user;
drop table site;
drop table source;
drop table author;
drop table contact_information;
drop table publisher;
drop table bibliography;
drop table bibliography_entry_xref;

create table user
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    username varchar(20),
    password_hash varchar(100),
    full_name varchar(50)
);

create table site
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    url varchar(100)
);

create table source
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    author_id integer,
    publisher_id integer,
    title varchar(200),
    date_published timestamp null,
    site_id integer null
);

create table author
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    name varchar(50),
    contact_information_id integer null
);

create table contact_information
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    address varchar(200),
    phone_number varchar(10),
    website_id integer null,
    -- More here 
);

create table publisher
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    name varchar(100),
    contact_information_id integer null
);

create table bibliography
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    name varchar(100) null,
);

create table entry
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    author_id integer null,
    first_page integer null,
    last_page integer null,
    note_id integer null,
    quote_id integer null,
    keywords varchar(100) null
);

create table bibliography_entry_xref
(
    id integer not null AUTO_INCREMENT,
    created_at timestamp null,
    updated_at timestamp null,
    bibliography_id integer,
    entry_id integer
);

