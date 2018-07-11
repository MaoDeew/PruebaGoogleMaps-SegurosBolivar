create database seguros;

create table representante 
(
id_Vendedor int not null,
documento long ,
nombre varchar(30),
apellido varchar(30),
telefono long,
usuario varchar(30),
clave varchar(30),
primary key (id_Vendedor)
);

create table meta
(
id_Meta int not null,
id_Vendedor int not null,
descripcion varchar(30),
objetivo varchar(30),
fecha_inicio date,
fecha_fin date,
primary key (id_Meta),
foreign key (id_Vendedor) REFERENCES representante (id_Vendedor)
);

create table city 
(
id_city int not null,
nombre varchar(30),
primary key (id_city)
);

create table visita 
(
id_visita int not null,
id_city int not null,
fecha_inicio date,
fecha_fin date,
objeto_visita varchar(100),
informe_final varchar(100),
primary key (id_visita),
foreign key (id_city) references city (id_city)
);

create table visita_vendedor 
(
idVisit_vendedor int not null,
id_visita int not null,
id_Vendedor int not null,
primary key (idVisit_vendedor),
foreign key (id_visita) references visita (id_visita),
foreign key (id_Vendedor) references representante (id_Vendedor)
);

create table docente
(
id_docente int not null,
id_city int not null,
documento long,
nombre varchar (30),
apellido varchar (30),
fecha_nacimiento date,
telefono long,
direccion varchar (30),
primary key (id_docente),
foreign key (id_city) references city(id_city)
);

create table tipoSeguro
(
idTipoSeguro int not null,
descripcion varchar(30),
cuantia long,
cubrimiento varchar(30),
ecepciones_poliza varchar(100),
primary key (idTipoSeguro)
);

create table contrato_seguro
(
id_contrato int not null,
id_docente int not null,
idtipoSeguro int not null,
fecha_firma date,
documento_fisico varchar(30) not null,
numero_poliza int not null,
primary key (id_contrato),
foreign key (idTipoSeguro) references tiposeguro(idTipoSeguro),
foreign key (id_docente) references docente(id_docente)
);




