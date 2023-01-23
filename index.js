//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")

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
function init(){
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
        console.log("inquirer done");
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNum);
        console.log(manager);
    })
}

//TODO:
//generate HTML file from user's input data
    //clicking on an email address, default email program opens and populates TO field
    //clicking on a github takes you to the github page

init();
