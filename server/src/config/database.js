require('dotenv/config');

module.exports = {
    dialect: DB_DIALECT,
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    define: {
        timestamps: true,
        underscored: true
    }
};