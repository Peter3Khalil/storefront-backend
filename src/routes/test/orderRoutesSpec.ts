import app from '../../server';
import supertest from 'supertest';
const request = supertest(app);
describe('test order api', () => {
    it('Get /order endpoint', async () => {
        const response = await request.get('/order');
        expect(response.status).toBe(200);
    });
    it('post /order endpoint', async () => {
        const response = await request.post('/order');
        expect(response.status).toBe(200);
    });
    it('delete /order/id endpoint', async () => {
        const response = await request.delete('/order/2');
        expect(response.status).toBe(200);
    });
    it('Get /order/id endpoint', async () => {
        const response = await request.get('/order/3');
        expect(response.status).toBe(200);
    });
});
