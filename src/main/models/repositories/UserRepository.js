import User from '../User.js';

class UserRepository {

    constructor(model) {
        this.model = model;
    }

    create(object) {
        return this.model.create(object);
    }

    findByEmail(email) {
        return this.model.findOne({"email": email});
    }

    findAll() {
        return this.model.find();
    }
}

export default new UserRepository(User);