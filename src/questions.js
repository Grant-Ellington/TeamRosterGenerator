const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message:"What is the manager's name?",
    },
    {
        type: 'input',
        name: 'managerId',
        message:"What is the manager's employee id?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message:"What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message:"What is the manager's office number?",
    },
    {
        type: 'list',
        name: 'managerChoices',
        message: "What team member position would you like to add?",
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'I am done adding team members.'
        ]
    }
    
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message:"What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'engineerId',
        message:"What is the engineer's employee id?",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message:"What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'engineerGit',
        message:"What is the manager's Github username?",
    },
    {
        type: 'list',
        name: 'engineerChoices',
        message: "What team member position would you like to add?",
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'I am done adding team members.'
        ]
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message:"What is the intern's name?",
    },
    {
        type: 'input',
        name: 'internId',
        message:"What is the intern's employee id?",
    },
    {
        type: 'input',
        name: 'internEmail',
        message:"What is the intern's email address?",
    },
    {
        type: 'input',
        name: 'internGit',
        message:"What is the intern's Github username?",
    },
    {
        type: 'list',
        name: 'internChoices',
        message: "What team member position would you like to add?",
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'I am done adding team members.'
        ]
    }
]

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions

};