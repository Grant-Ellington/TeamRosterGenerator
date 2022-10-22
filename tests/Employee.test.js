const Engineer = require('../lib/Engineer')

test('Can set engineer name value constructor', ()=> {
    let e = new Engineer('John Doe', '1234', 'test@test.com', 'name-name', 'Intern')
    let results = 'John Doe';
    expect(e.name).toBe(results);
});