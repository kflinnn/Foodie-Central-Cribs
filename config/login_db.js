let loopback = require("signup-login-module");

let port = new loopback.port(3100);

let dbConfig = {
    "name": "", "options": {

        "host": "",
        "port": 3100,
        "url": "",
        "database": process.env.DB_NAME,
        "password": process.env.DB_PASSWORD,
        "user": process.env.DB_USER,
        "connector": "mysql" // connector name ex. mongodb or mysql
    }
};

let database = new loopback.datasource(dbConfig);