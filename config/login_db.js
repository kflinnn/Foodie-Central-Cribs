var loopback = require("signup-login-module");

var port = new loopback.port(3100);

var dbConfig = {"name":"","options":{
    
    "host": "",
    "port": 3100,
    "url": "",
    "database": "foodiecentral_db",
    "password": "password",
    "user": "root",
    "connector": "mysql" // connector name ex. mongodb or mysql
}};

var database = new loopback.datasource(dbConfig);