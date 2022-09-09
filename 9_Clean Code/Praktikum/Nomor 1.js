class user {
    var id;
    var username;
    var password;
}

class userservice {
    user[] user = [];

    user[] getalluser() {
        return users;
    }

    user getuserbyid(userid) {
        return user.filter(userid)
    }
}