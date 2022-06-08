const Calculation = require('./calc.js')

describe('Calculate the output', () => {
    test('Add the two parameters', () => {
        // Arrange
        let num1 = 1
        let num2 = 2
        // Act
       const sum = Calculation.add(num1, num2)
        // assertion
        expect(sum).toBe(3)
    })

    test('Add the two parameters', () => {
        // Arrange
        let num1 = 10
        let num2 = 5      
        // Act
        const sum = Calculation.add(num1, num2)
        // assertion
        expect(sum).toBe(15)
    })

    test('Add the two parameters', () => {
        // Arrange
        let num1 = 5
        let num2 = 5
        //    Act
        const sum = Calculation.add(num1, num2)
        // Assertion
        expect(sum).toBe(10)
    })

    test('Subtract the two parameters', () => {
        // Arrange
        let num1 = 5
        let num2 = 10
        // Act
        let subtraction = Calculation.subtract(num2, num1)
        // Assertion
        expect(subtraction).toBe(5)
    })

    test('Subtract the two parameters', () => {
        // Arrange
        let num1 = 30
        let num2 = 60
        // Act
        let subtraction = Calculation.subtract(num2, num1)
        // Assertion
        expect(subtraction).toBe(30)
    })

    test('Subtract the two parameters', () => {
        // Arrange
        let num1 = 1
        let num2 = 2
        // Act
        let subtraction = Calculation.subtract(num2, num1)
        // Assertion
        expect(subtraction).not.toBe(5)
    })

    test('multiply the two parameters', () => {
        // Arrange
        let num1 = 3
        let num2 = 3
        // Act
        let multip = Calculation.multiply(num2, num1)
        // Assertion
        expect(multip).toBe(9)
    })

    test('multiply the two parameters', () => {
        // Arrange
        let num1 = 5
        let num2 = 3
        // Act
        let multip = Calculation.multiply(num2, num1)
        // Assertion
        expect(multip).toBe(15)
    })

    test('multiply the two parameters', () => {
        // Arrange
        let num1 = 10
        let num2 = 10
        // Act
        let multip = Calculation.multiply(num2, num1)
        // Assertion
        expect(multip).toBe(100)
    })

    // test('divide the two parameters', () => {
    //     expect(divide(2, 2)).toBe(0)
    // })

    test('division the two parameters', () => {
        // Arrange
        let num1 = 10
        let num2 = 100
        // Act
        let division = Calculation.divide(num2, num1)
        // Assertion
        expect(division).toBe(10)
    })


    test('division the two parameters', () => {
        // Arrange
        let num1 = 10
        let num2 = 50
        // Act
        let division = Calculation.divide(num2, num1)
        // Assertion
        expect(division).toBe(5)
    })

    test('division the two parameters', () => {
        // Arrange
        let num1 = 5
        let num2 = 20
        // Act
        let division = Calculation.divide(num2, num1)
        // Assertion
        expect(division).toBe(4)
    })
    
})