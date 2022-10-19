const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message:"What is the manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message:"What is the manager's employee id?",
    },
    {
        type: 'input',
        name: 'email',
        message:"What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'officeNumber',
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





module.exports = managerQuestions;

