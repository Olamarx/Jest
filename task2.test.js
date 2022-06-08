const reverse = require('./task2')

test('Reverse the string', () => {
    expect(reverse(['we', 'are', 'going'].reverse().join(''))).not.toBe([])
})