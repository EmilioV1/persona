require("dotenv").config();

const configObj = {
    "development": {
        "username": process.env.DB_USER_LOCAL,
        "password": process.env.DB_PASSWORD_LOCAL,
        "database": process.env.DB_DATABASE_LOCAL,
        "host": process.env.DB_HOST_LOCAL,
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