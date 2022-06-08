const length = require('./task1.js')

describe('check the length of two strings', () => {
      
    test('check the length of the string', () => {
        // Arrange
            const string = 'word of wisdom'
            // Act
            const length = string.length
            // Assertion
            expect(length).not.toBe(5)
    })


    test('check the length of the string', () => {
             // Arrange
             const string = 'word of wisdom'
             // Act
             const length = string.length
             // Assertion
             expect(length).not.toBe(5)
            expect(() => {if((length > 0) && (!length > 10)){
                console.error(error);
            }
        })
    })      
})