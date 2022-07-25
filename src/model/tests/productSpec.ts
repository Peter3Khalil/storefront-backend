import productModel from '../productModel';
const productmodel = new productModel();
describe('test methods of Product Model to be defined', () => {
    it('Create method must be defined', () => {
        expect(productmodel.create).toBeDefined();
    });
    it('Get method must be defined', () => {
        expect(productmodel.get).toBeDefined();
    });
    it('GetUser method must be defined', () => {
        expect(productmodel.getProduct).toBeDefined();
    });
    it('Delete User method must be defined', () => {
        expect(productmodel.deleteProduct).toBeDefined();
    });
});
