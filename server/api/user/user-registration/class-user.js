class User {
    constructor(user, name, password, email, z_insert_date){
        this.user = user;
        this.name = name;
        this.password = password;
        this.email = email;
        this.z_insert_date = z_insert_date;
    }
}

module.exports = User