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

module.exports = engineerQuestions