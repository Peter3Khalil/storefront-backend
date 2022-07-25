import Product from '../types/product.type';
import db from '../database/conn';
class productModel {
    table = 'PRODUCTS';
    async create(p: Product): Promise<Product | null> {
        try {
            const conn = await db.connect();
            const sql = `INSERT INTO ${this.table}(name,price,category) VALUES($1,$2,$3) RETURNING *`;
            const result = (await conn).query(sql, [
                p.name,
                p.price,
                p.category,
            ]);
            conn.release();
            return (await result).rows[0];
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async get(): Promise<Product[]> {
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
    async getProduct(id: number): Promise<Product | string> {
        try {
            const conn = await db.connect();
            const sql = `SELECT *FROM ${this.table} WHERE id =$1`;
            const result = await conn.query(sql, [id]);
            conn.release();
            if (result.rows[0]) return result.rows[0];
            return `product that has id = ${id} not found`;
        } catch (error) {
            console.log(error);
            return 'there is some error';
        }
    }
    async deleteProduct(id: number): Promise<string> {
        try {
            const conn = await db.connect();
            const check = await this.getProduct(id);
            if (typeof check === 'string') return check;
            const sql = `DELETE FROM ${this.table} where id=$1`;
            await conn.query(sql, [id]);
            conn.release();
            return `PRODUCT is deleted`;
        } catch (error) {
            console.log(error);
            return `cannot delete the Product that has id =${id}`;
        }
    }
}
export default productModel;
