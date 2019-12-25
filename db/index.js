const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.DB_URI,
    connectionTimeoutMillis: 10000,
    max: 100,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}
