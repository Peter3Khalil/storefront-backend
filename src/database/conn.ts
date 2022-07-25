import { Pool } from 'pg';
import config from './config';
const pool = new Pool({
    port: parseInt(config.port as string),
    host: config.host,
    password: config.password,
    database: config.database,
    user: config.username,
});
export default pool;
