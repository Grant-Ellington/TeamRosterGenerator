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
const createFile = require('./src/createFile')

const inquirer = require('inquirer');
const fs = require('fs');



const cards = [];

module.exports = cards


function executeManager (){
    inquirer.prompt(managerQuestions).then( (data)=> {
        const newManager = new Manager(data.name, data.id, data.email, data.officeNumber)
        cards.push(createManagerCard(newManager))

        if (data.managerChoices === 'Manager'){
            executeManager()
        } else if(data.managerChoices === 'Engineer'){
            executeEngineer()
        }else if(data.managerChoices === 'Intern'){
            executeIntern()
        } else{
            createFile(cards)
        }
    });
};

function executeEngineer (){
    inquirer.prompt(engineerQuestions).then( (data)=> {
        const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
        cards.push(createEngineerCard(newEngineer))

        if (data.engineerChoices === 'Manager'){
            executeManager()
        } else if(data.engineerChoices === 'Engineer'){
            executeEngineer()
        }else if(data.engineerChoices === 'Intern'){
            executeIntern()
        } else{
            createFile(cards)
        }
    })
}

function executeIntern() {
    inquirer.prompt(internQuestions).then( (data) => {
        const newIntern = new Intern(data.name, data.id, data.email, data.school)
        cards.push(createInternCard(newIntern))

        if (data.internChoices === 'Manager'){
            executeManager()
        } else if(data.internChoices === 'Engineer'){
            executeEngineer()
        }else if(data.internChoices === 'Intern'){
            executeIntern()
        } else{
            createFile(cards)
        }
    })
    
}

function init () {
executeManager();
}

init();