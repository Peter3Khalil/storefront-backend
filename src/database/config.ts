import dotenv from 'dotenv';
dotenv.config();
const { PORT, USER_NAME, DB_NAME, PASSWORD, HOST, SALT, PEBBER } = process.env;

export default {
    port: PORT,
    username: USER_NAME,
    database: DB_NAME,
    password: PASSWORD,
    host: HOST,
    salt: SALT,
    pebber: PEBBER,
};
