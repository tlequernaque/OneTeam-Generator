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



function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

const init = (questions) => {
    inquirer.prompt(questions) .then((response) => {
        console.log(response);
        const mdPageContent = generateMarkdown(response);
        console.log(mdPageContent);
        writeToFile ('./dist/team.html', mdPageContent)
    })
};

init(questions);