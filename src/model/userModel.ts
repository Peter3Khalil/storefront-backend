import User from '../types/user.type';
import db from '../database/conn';
import config from '../database/config';
import bcrypt from 'bcrypt';
// import { config } from 'dotenv';
const hashpassword = (password: string) => {
    const salt = parseInt(config.salt as string);
    return bcrypt.hashSync(`${password}${config.pebber}`, salt);
};
class userModel {
    table = 'USERS';
    async create(u: User): Promise<User | null> {
        try {
            const conn = await db.connect();
            const sql = `INSERT INTO ${this.table}(firstname,lastname,password) VALUES($1,$2,$3) RETURNING *`;
            const result = (await conn).query(sql, [
                u.first_name,
                u.last_name,
                hashpassword(u.password),
            ]);
            conn.release();
            return (await result).rows[0];
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async get(): Promise<User[]> {
        try {
            const conn = await db.connect();
            const sql = `SELECT *FROM ${this.table}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    async getUser(id: number): Promise<User | string> {
        try {
            const conn = await db.connect();
            const sql = `SELECT *FROM ${this.table} WHERE id =$1`;
            const result = await conn.query(sql, [id]);
            conn.release();
            if (result.rows[0]) return result.rows[0];
            return `user that has id = ${id} not found`;
        } catch (error) {
            console.log(error);
            return 'there is some error';
        }
    }
    async deleteUser(id: number): Promise<string> {
        try {
            const conn = await db.connect();
            const check = await this.getUser(id);
            if (typeof check === 'string') return check;
            const sql = `DELETE FROM ${this.table} where id=$1`;
            await conn.query(sql, [id]);
            conn.release();
            return `USER is deleted`;
        } catch (error) {
            console.log(error);
            return `cannot delete the User that has id =${id}`;
        }
    }
}
export default userModel;
