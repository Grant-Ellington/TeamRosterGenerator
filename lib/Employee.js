class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        console.log(this.name)
    }
    getEmail(){
        console.log(this.email)
    }
    getRole(){
        
    }
}

var newVar = new Employee('Grant', 1234, 'test@test.com')
newVar.getName()

module.exports = Employee