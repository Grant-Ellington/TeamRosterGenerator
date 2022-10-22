const Manager = require('../lib/Manager')

test('can set office nember via constructor', () => {
    let m = new Manager('John Doe', '1234', 'test@test.com', '1234');
    let results = '1234';
    expect(m.officeNumber).toBe(results) 
})