const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message:"What is the intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message:"What is the intern's employee id?",
    },
    {
        type: 'input',
        name: 'email',
        message:"What is the intern's email address?",
    },
    {
        type: 'input',
        name: 'school',
        message:"What is the intern's school?",
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
];

module.exports = internQuestions;