import app from '../../server';
import supertest from 'supertest';
const request = supertest(app);
describe('test user api', () => {
    it('Get /user endpoint', async () => {
        const response = await request.get('/user');
        expect(response.status).toBe(200);
    });
    it('post /user endpoint', async () => {
        const response = await request.post('/user');
        expect(response.status).toBe(200);
    });
    it('delete /user/id endpoint', async () => {
        const response = await request.delete('/user/2');
        expect(response.status).toBe(200);
    });
    it('Get /user/id endpoint', async () => {
        const response = await request.get('/user/3');
        expect(response.status).toBe(200);
    });
});
