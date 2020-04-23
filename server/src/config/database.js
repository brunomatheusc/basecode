require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    host: '192.168.99.100',
    username: "postgres",
    password: "20wiser20",
    database: "wiserchallenge",
    define: {
        timestamps: true,
        underscored: true
    }
};