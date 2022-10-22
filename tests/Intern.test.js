const Intern = require('../lib/Intern');

test('can set intern school via constructor', ()=>{
    let i = new Intern('John Doe', '1234', 'test@test.com', 'test')
    let results = 'test';
    expect(i.school).toBe('test')
    
}) 