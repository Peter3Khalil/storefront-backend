import Order from '../types/order.type';
import db from '../database/conn';
class orderModel {
    table = 'ORDERS';
    async create(o: Order): Promise<Order | null> {
        try {
            const conn = await db.connect();
            const sql = `INSERT INTO ${this.table}(product_id,quantity,user_id,status) VALUES($1,$2,$3,$4) RETURNING *`;
            const result = (await conn).query(sql, [
                o.productId,
                o.quantity,
                o.userId,
                o.status,
            ]);
            conn.release();
            return (await result).rows[0];
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async get(): Promise<Order[]> {
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
    async getOrder(id: number): Promise<Order | string> {
        try {
            const conn = await db.connect();
            const sql = `SELECT *FROM ${this.table} WHERE id =$1`;
            const result = await conn.query(sql, [id]);
            conn.release();
            if (result.rows[0]) return result.rows[0];
            return `Order that has id = ${id} not found`;
        } catch (error) {
            console.log(error);
            return 'there is some error';
        }
    }
    async deleteOrder(id: number): Promise<string> {
        try {
            const conn = await db.connect();
            const check = await this.getOrder(id);
            if (typeof check === 'string') return check;
            const sql = `DELETE FROM ${this.table} where id=$1`;
            await conn.query(sql, [id]);
            conn.release();
            return `ORDER is deleted`;
        } catch (error) {
            console.log(error);
            return `cannot delete the Order that has id =${id}`;
        }
    }
}
export default orderModel;
