Prerequisites
. Node.js
. MySQL
. MongoDB
.RabbitMQ

Set Up MySQL Database

. Install MySQL with $ npm install mysql and start mysql.
. Create a MySQL database named user_schema.

Set Up RabbitMQ
. Install RabbitMQ with $ nnpm install amqplib and start RabbitMQ.
. Ensure RabbitMQ server is running.

Set Up MongoDB
Install MongoDB driver with $ npm i mongoose.
Create a MongoDB schema named gameSchema

Configuration
Update all the configuration in config/db.config.js

create table users(
    Id int primary key auto_increment,
    email varchar(30) unique,
    password varchar(250),
    username varchar(50)
);
