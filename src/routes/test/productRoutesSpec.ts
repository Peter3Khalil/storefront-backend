import app from '../../server';
import supertest from 'supertest';
const request = supertest(app);
describe('test product api', () => {
    it('Get /product endpoint', async () => {
        const response = await request.get('/product');
        expect(response.status).toBe(200);
    });
    it('post /product endpoint', async () => {
        const response = await request.post('/product');
        expect(response.status).toBe(200);
    });
    it('delete /product/id endpoint', async () => {
        const response = await request.delete('/product/2');
        expect(response.status).toBe(200);
    });
    it('Get /product/id endpoint', async () => {
        const response = await request.get('/product/3');
        expect(response.status).toBe(200);
    });
});
