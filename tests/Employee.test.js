const Employee = require('../lib/Employee')

test('Can set engineer name value constructor', ()=> {
    let e = new Employee('John Doe', '1234', 'test@test.com')
    let results = 'John Doe';
    expect(e.name).toBe(results);
});

test('Can set employee id value via constructr', () => {
    let e = new Employee('John Doe', '1234', 'test@test.com')
    let results = '1234'
    expect(e.id).toBe(results)
})

test('can set emplyee email value via constructor', () => {
    let e = new Employee('John Doe', '1234', 'test@test.com')
    let results = 'test@test.com'
    expect(e.email).toBe(results)
})