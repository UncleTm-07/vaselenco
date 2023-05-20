const {User} = require("../models/db_models")


class AuthService {
    async getUserByEmail (username) {
        return await User.findOne({where:{username}})
    }
    async createUser (username, hashPassword) {
        return await User.create({username, password: hashPassword});
    }
    async getUserById (id) {
        return await User.findByPk(id);
    }
}

module.exports = new AuthService()