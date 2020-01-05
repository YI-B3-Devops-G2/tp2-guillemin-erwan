'use strict';

const express = require('express');
const { User } = require('pg');

const pg = new User({
  user: "root",
  password: "azerty",
  host: "postgres",
  database: "DatabaseDocker",
  port: 5432,
});

const app = express();
app.get('/', (req, res) => {
  res.send("Welcome on Nginx");

});

app.get('/api', (req, res) => {
  res.send( { "message": "Hello World" });
});

app.get('/status', (req, res) => {
  res.send({
    "status": "OK",
    "postgresUptime": "String",
    "redisConnectedClients": "Number"
  });
});

 app.listen(3000, function () {
    console.log('Server listen on port 3000')
  })
