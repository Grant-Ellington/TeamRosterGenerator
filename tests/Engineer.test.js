const Engineer = require('../lib/Engineer')

test('can create github link via constructor', () => {
    let e = new Engineer('John Doe', '1234', 'test@test.com', 'John-Doe')
    let results = 'John-Doe';
    expect(e.github).toBe(results)
})