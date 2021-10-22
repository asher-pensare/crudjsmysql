--creando bd
CREATE DATABASE crudjsmysql;
use crudjsmysql;
CREATE table actividad(
    id int unsigned auto_increment primary key,
    nombre varchar(50) not null,
    client varchar(50) not null,
    requestedBy varchar(50) not null,
    requestDate date,
    completionDate date,
    hourss int
);
--mostrar tabla
show tables;
--describe tabla
describe actividad;

