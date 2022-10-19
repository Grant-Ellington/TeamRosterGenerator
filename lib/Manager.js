const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor( name, id, email, officeNumber ) {

        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole(){
        return 'Manager'
    }

}

let newVar = new Manager('JohnDoe', 1234, 'test@test.com','A1')
 console.log(newVar)

 module.exports = Manager