const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const newHtml = require('./src/page-template')

const addEmployee = [
    {
        type: 'list',
        name: 'type',
        message: 'Which type of employee would you like to add to your team?',
        choices: ['Engineer', 'Intern', 'Finish adding employees']

    }
];

const addEngineer = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the enginner?',
    }, 
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the employee ID number of your engineer?',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the email address of your engineer?',
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the GitHub username of your engineer?',
    }

]

const addIntern = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of the enginner?',
    }, 
    {
        type: 'input',
        name: 'internId',
        message: 'What is the employee ID number of your engineer?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the email address of your engineer?',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What school does the intern attend?',
    }

]

const addManager = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the enginner?',
    }, 
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the employee ID number of your engineer?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the email address of your engineer?',
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'What is the office number of the manager?',
    }

]

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

const init = (addEmployee) => {
    inquirer.prompt(addEmployee) .then((response) => {
        console.log(response);
        const htmlPageContent = generateHtml(response);
        console.log(htmlPageContent);
        writeToFile ('./dist/team.html', htmlPageContent)
    })
};

init(addEmployee);