class Manager extends Employee {
    constructor( name, id, email, officeNumber ) {

        super(name, age, email)
        this.officeNumber = officeNumber
    }

    getRole(){
        return 'Manager'
    }

}