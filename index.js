//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")

let employees = [];

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
            case "Finished": createHTML(); break;
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

//creates intern using inquirer, pushes intern to employee arr
function createIntern(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "int_Name",
            message: "What is the intern's name?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
        {
            type: "input",
            name: "int_ID",
            message: "What is the intern's ID?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
        {
            type: "input",
            name: "int_email",
            message: "What is the intern's email address?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
        {
            type: "input",
            name: "int_school",
            message: "What is the intern's school?",
            validate: (value) => {if(value){return true}else{return "Please enter a response."}}
        },
    ])
    .then((data) => {
        const intern =  new Intern(data.int_Name, data.int_ID, data.int_email, data.int_school);
        employees.push(intern);
        selectEmployeeType();
    })
}

//creates HTML file using employees arr
function createHTML(){
    let fileHead = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>My Team</title>
</head>
<body>
    <h1 class="titleHeader">My Team</h1>
    <section class="flex-sect">  
`
const fileTail = `
    </section>
</body>
</html>`

    for(let i = 0; i < employees.length; i++){
        let extra;
        let emoji;
        switch(employees[i].getRole()){
            case "Manager": extra = "Office Number: " + employees[i].getOfficeNumber(); emoji = "&#9749;"; break; 
            case "Engineer": extra = "Github: <a href=\"https://github.com/" + employees[i].getGithub() + "\" target=\"_blank\"> https://github.com/" + employees[i].getGithub() + "</a>"; emoji = "&#128187;"; break;
            case "Intern": extra = "School: " + employees[i].getSchool(); emoji = "&#128083;"; break;
            default: console.log("ERROR: Invalid Role");

        }
        const newCard = `
        <div class="card">
            <section class = "cardHeader">
                <h2>${employees[i].getName()}</h2>
                <h3>${employees[i].getRole()}</h3>
            </section>
            <section class = "cardBody">
                <ul class="cardList">
                    <li>ID: ${employees[i].getId()}</li>
                    <li>Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
                    <li>${extra}</li>
                </ul>
            </section>
        </div>
        
        `
        fileHead += newCard;
    }

    fileHead += fileTail;
    
    fs.writeFile("./dist/index.html", fileHead, (err) =>
    err ? console.error(err) : console.log('\nThe HTML file was successfully generated. It is called "index.html", and is located in the "dist" directory. If there was an "index.html" file already in that directory, it has been overwritten.'));
}

init();
