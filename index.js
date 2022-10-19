const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerQuestions = require('./src/managerQuestions');
const internQuestions = require('./src/internQuestions');
const engineerQuestions = require('./src/engineerQuestions');

const createManagerCard = require('./src/createManagerCards');
const createInternCard = require('./src/createInternCard');
const createEngineerCard = require('./src/createEngineerCard');

const inquirer = require('inquirer');
const fs = require('fs')


const cards = [];

function executeManager (){
    inquirer.prompt(managerQuestions).then( (data)=> {
        let newManager = new Manager(data.name, data.id, data.email, data.officeNumber)
        console.log(newManager)
    })
}

//console.log(internQuestions)

function init () {
executeManager();
}

init();