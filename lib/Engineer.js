const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    getGitHub(){}
    getRole(){
        return 'Engineer'
    }
}

var newVar = new Engineer( 'JohnDoe', 1234, 'test@test.com','John-Doe' )
console.log(newVar)

module.exports = Engineer