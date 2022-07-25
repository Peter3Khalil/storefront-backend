import orderModel from '../orderModel';
const ordermodel = new orderModel();
describe('test methods of Order Model to be defined', () => {
    it('Create method must be defined', () => {
        expect(ordermodel.create).toBeDefined();
    });
    it('Get method must be defined', () => {
        expect(ordermodel.get).toBeDefined();
    });
    it('GetUser method must be defined', () => {
        expect(ordermodel.getOrder).toBeDefined();
    });
    it('Delete User method must be defined', () => {
        expect(ordermodel.deleteOrder).toBeDefined();
    });
});
