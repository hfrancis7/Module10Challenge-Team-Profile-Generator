# Module 10 Challenge: Team Profile Generator
  ![License:MIT License](https://img.shields.io/badge/License-MIT-yellow.svg) 

## Description

I needed a way to generate an HTML page that gave details about my project team.

This program allows the user to generate an HTML file with information about the Manager, Engineers, and Interns of a project using a user's input from the terminal.

Using inquirer within functions, it appeears that the menu loops over and over again when selecting between if the user wants to add another Engineer, Intern, or Finish, but it's actually multiple inquirer prompts.

The HTML page uses both custom CSS to style the page.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

## Installation

- make sure Node.js is installed on your local machine
- clone this repository onto your local machine
- use "npm init -y" to install the node_modules needed

## Usage

- use "node index" on your terminal in the cloned repo directory
- You will first be prompted to input information about the manager of the project. After answering each question in the terminal, press "Enter" to continue.
- After all questions about the manager are answered, you will be prompted if you want to add an Engineer, an Intern, or if you are finished. The menu will continue cycling as you add Engineers and Interns until you choose "Finish".
- Once you choose "Finish," an HTML file called "index.html" will be generated in the "dist" folder
  - NOTE: This project uses a seperate style.css and reset.css used for styling purposes. These are located in the "./dist/css"
  
  ![Sample Page](./dist/screenshots/sampleHTML.jpg "Sample Page")
 - Demo Video: https://clipchamp.com/watch/0dpsNdfirwG

## License
This project is covered by the following license: 

[MIT License](https://choosealicense.com/licenses/mit/)

## Tests

There are four tests written to be used with jest. These tests are located within the "test" directory. 

These tests primarily check to make sure that all getter methods for every class is working properly.

To run these tests, you can use "npm test" in the directory to run all of the tests at once, or use "npm test Employee", "npm test Engineer", "npm test Intern", and/or "npm test Manager" to run each test individually.

## Questions

If you have any questions about this project, here's how to contact me:
- Github: https://github.com/hfrancis7
- Email: hfran7@yahoo.com

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
