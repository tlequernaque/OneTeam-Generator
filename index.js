const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const newHtml = require('./src/page-template')
const team = []

const employeeOption = [
    {
        type: 'list',
        name: 'type',
        message: 'Which type of employee would you like to add to your team?',
        choices: ['Engineer', 'Intern', 'Finish adding employees']

    }
];

const addEngineerQuestions = [
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

const addInternQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of the intern?',
    }, 
    {
        type: 'input',
        name: 'internId',
        message: 'What is the employee ID number of your intern?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the email address of your intern?',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What school does the intern attend?',
    }

]

const addManagerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the manager?',
    }, 
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the employee ID number of your manager?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the email address of your manager?',
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


const addEngineer = () => {
    inquirer.prompt(addEngineerQuestions) .then((response) => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        team.push(engineer)
        addEmployee()
    })
};


const addIntern = () => {
    inquirer.prompt(addInternQuestions) .then((response) => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        team.push(intern)
        addEmployee()
    })
};


const addManager = () => {
    inquirer.prompt(addManagerQuestions) .then((response) => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
        team.push(manager)
        addEmployee()
    })
};


const addEmployee = () => {
    inquirer.prompt(employeeOption) .then((response) => {
        if (response.type === "Engineer"){
            addEngineer()
        }else if (response.type === "Intern"){
            addIntern()
        }else{
            console.log(team)
            writeToFile("./dist/team.html", newHtml(team))
        }
    })    
}

addManager()