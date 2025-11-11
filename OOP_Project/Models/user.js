// User Class

export class User {
    constructor(name, email) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.email = email;
    }

    // We are going to use polymorphism to override this method to get different user role (admin or member)
    getRole() {
        return 'User'
    }
}