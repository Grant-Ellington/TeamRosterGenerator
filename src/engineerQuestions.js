const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message:"What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message:"What is the engineer's employee id?",
    },
    {
        type: 'input',
        name: 'email',
        message:"What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'github',
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