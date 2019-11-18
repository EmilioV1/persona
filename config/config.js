require("dotenv").config();

const configObj = {
    "development": {
        username: process.env.DB_LOCAL_USER,
        password: process.env.DB_LOCAL_PASSWORD,
        database: process.env.DB_LOCAL_DATABASE,
        host: process.env.DB_LOCAL_HOSTNAME,
        "dialect": "mysql"
    },
    "test": {
        "username": process.env.DB_USER_TEST,
        "password": process.env.DB_PASSWORD_TEST,
        "database": process.env.DB_DATABASE_TEST,
        "host": process.env.DB_HOST_TEST,
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
}

module.exports = configObj;