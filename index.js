//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")

let employees = [];

//TODO: 
//using inquirer,
    //get the team manager's
        //name
        //employee ID
        //email address
        //office number

    //present a menu option that is able to loop
        //choose engineer or intern
            //choosing engineer:
                //name
                //id
                //email
                //github
            //choose intern:
                //name
                //id
                //email
                //school
    //when complete, html file generates

//initates program
function init(){
    createManager();
}

//selects between Engineer, Intern, or Exit
function selectEmployeeType(){
    inquirer
    .prompt([
        {
            type: "list",
            name: "add_Empl_opt",
            message: "What type of Employee would you like to add?",
            choices: ["Engineer", "Intern", "Finished"]
        }
    ])
    .then((data) => {
        switch(data.add_Empl_opt){
            case "Engineer": createEngineer(); break;
            case "Intern": createIntern(); break;
            case "Finished": return;
            default: console.log("[ERROR] Valid option not selected. (" + option + ")");
        }
    })
    
}

//creates manager using inquirer, pushes manager to employee arr
function createManager(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name for the 'team manager' of this project?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the team manager's employee ID?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email address?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is the team manager's office number?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        }
    ])
    .then((data) => {
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNum);
        employees.push(manager);
        selectEmployeeType();
    })
    .catch()
}

//creates engineer using inquirer, pushes engineer to employee arr
function createEngineer(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "eng_Name",
            message: "What is the engineer's name?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
        {
            type: "input",
            name: "eng_ID",
            message: "What is the engineer's ID?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
        {
            type: "input",
            name: "eng_email",
            message: "What is the engineer's email address?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
        {
            type: "input",
            name: "eng_github",
            message: "What is the engineer's Github username?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
    ])
    .then((data) => {
        const engineer =  new Engineer(data.eng_Name, data.eng_ID, data.eng_email, data.eng_github);
        employees.push(engineer);
        selectEmployeeType();
    })
}

//creates intern using inquirer, pushes engineer to employee arr
function createIntern(){
    console.log("Intern");
}




//TODO:
//generate HTML file from user's input data
    //clicking on an email address, default email program opens and populates TO field
    //clicking on a github takes you to the github page

init();
