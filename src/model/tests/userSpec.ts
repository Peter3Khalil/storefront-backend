import userModel from '../userModel';
const usermodel = new userModel();
describe('test methods of User Model to be defined', () => {
    it('Create method must be defined', () => {
        expect(usermodel.create).toBeDefined();
    });
    it('Get method must be defined', () => {
        expect(usermodel.get).toBeDefined();
    });
    it('GetUser method must be defined', () => {
        expect(usermodel.getUser).toBeDefined();
    });
    it('Delete User method must be defined', () => {
        expect(usermodel.deleteUser).toBeDefined();
    });
});
