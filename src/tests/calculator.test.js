const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers: -5 + -3 = -8', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number: 10 + -4 = 6', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number: 7 + 0 = 7', () => {
      expect(add(7, 0)).toBe(7);
    });

    test('should add zero to zero: 0 + 0 = 0', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add decimal numbers: 3.5 + 2.5 = 6', () => {
      expect(add(3.5, 2.5)).toBe(6);
    });

    test('should add large numbers: 1000000 + 2000000 = 3000000', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract and get a negative result: 5 - 10 = -5', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers: -5 - (-3) = -2', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number: 7 - 0 = 7', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    test('should subtract a number from zero: 0 - 5 = -5', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract equal numbers: 10 - 10 = 0', () => {
      expect(subtract(10, 10)).toBe(0);
    });

    test('should subtract decimal numbers: 10.5 - 4.3 ≈ 6.2', () => {
      expect(subtract(10.5, 4.3)).toBeCloseTo(6.2);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply with zero: 10 * 0 = 0', () => {
      expect(multiply(10, 0)).toBe(0);
    });

    test('should multiply two negative numbers: -3 * -4 = 12', () => {
      expect(multiply(-3, -4)).toBe(12);
    });

    test('should multiply positive and negative: -5 * 3 = -15', () => {
      expect(multiply(-5, 3)).toBe(-15);
    });

    test('should multiply a number by one: 7 * 1 = 7', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers: 1000 * 1000 = 1000000', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });

    test('should multiply by negative one: 7 * -1 = -7', () => {
      expect(multiply(7, -1)).toBe(-7);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide with decimal result: 10 / 4 = 2.5', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should divide zero by a number: 0 / 5 = 0', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide two negative numbers: -20 / -5 = 4', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide positive by negative: 20 / -5 = -4', () => {
      expect(divide(20, -5)).toBe(-4);
    });

    test('should throw error for division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-5, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide decimal numbers: 7.5 / 2.5 = 3', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should divide a number by one: 42 / 1 = 42', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide by itself: 5 / 5 = 1', () => {
      expect(divide(5, 5)).toBe(1);
    });
  });

  describe('Integration Tests - Examples from calc-basic-operations.png', () => {
    test('Example 1: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('Example 2: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('Example 3: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('Example 4: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  describe('Edge Cases and Error Handling', () => {
    test('should handle very small decimal numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle operations with Infinity', () => {
      expect(divide(10, 0.0001)).toBeGreaterThan(99999);
    });

    test('should handle negative zero: -0 + 5 = 5', () => {
      expect(add(-0, 5)).toBe(5);
    });

    test('should preserve precision in multiplication', () => {
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });
  });
});
