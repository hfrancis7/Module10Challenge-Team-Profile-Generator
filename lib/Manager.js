const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // GETTERS //
    
    getRole(){
        return "Manager";
    }

    //not specified in README but putting anyways
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;