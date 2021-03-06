module.exports = class AuthenticationRepositoryImpl {

    constructor(
        userMongoDbDatasource
    ) {
        this._userMongoDbDatasource = userMongoDbDatasource();
    }

    createUser(userEntity) {

        let user = {
            'name': userEntity.name,
            'email': userEntity.email,
            'password': userEntity.password,
        }

        return this._userMongoDbDatasource.create(
            user
        )
    }

    findUser(userEntity) {
        let user = {
            'email': userEntity.email,
        }

        return this._userMongoDbDatasource.userModel.findOne(user).exec();
    }



}