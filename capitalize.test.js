const capitalize = require('./capitalize.js')

test('check if the first letter is capital letter', () => {
    // Arrange
    const capital = (str) => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    // act
    const word = capital('pullup')
    // Assert
    expect(word).toBe('Pullup')
    })