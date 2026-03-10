const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

  describe('Modulo', () => {
    test('should calculate remainder: 10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should return zero when number is divisible: 10 % 5 = 0', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should handle negative numbers: -10 % 3 = -1', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should handle both negative: -10 % -3 = -1', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot calculate modulo by zero');
    });

    test('should handle decimal modulo: 10.5 % 3 ≈ 1.5', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });

    test('should return the number when divisor is larger: 3 % 10 = 3', () => {
      expect(modulo(3, 10)).toBe(3);
    });
  });

  describe('Exponentiation (Power)', () => {
    test('should calculate power: 2 ** 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should handle zero exponent: 5 ** 0 = 1', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should handle exponent of one: 7 ** 1 = 7', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should handle negative exponents: 2 ** -2 = 0.25', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should handle negative base: (-2) ** 3 = -8', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle large powers: 2 ** 10 = 1024', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('should handle fractional exponents: 4 ** 0.5 = 2', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle decimal base and exponent: 1.5 ** 2 = 2.25', () => {
      expect(power(1.5, 2)).toBe(2.25);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root: √25 = 5', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should return 1 for √1 = 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should return 0 for √0 = 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of decimal: √2.25 = 1.5', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should throw error for negative numbers', () => {
      expect(() => squareRoot(-16)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative decimal', () => {
      expect(() => squareRoot(-0.5)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should calculate square root of large number: √10000 = 100', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should calculate square root of small decimal: √0.04 = 0.2', () => {
      expect(squareRoot(0.04)).toBe(0.2);
    });
  });

  describe('Integration Tests - Basic Operations from calc-basic-operations.png', () => {
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

  describe('Integration Tests - Advanced Operations', () => {
    test('should calculate modulo correctly', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate exponentiation correctly', () => {
      expect(power(3, 4)).toBe(81);
    });

    test('should calculate square root correctly', () => {
      expect(squareRoot(36)).toBe(6);
    });

    test('combined: √(power(2, 6)) = √64 = 8', () => {
      const result = squareRoot(power(2, 6));
      expect(result).toBe(8);
    });

    test('combined: power(squareRoot(16), 2) = 4 ** 2 = 16', () => {
      const result = power(squareRoot(16), 2);
      expect(result).toBe(16);
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

  describe('Examples from calc-extended-operations.png', () => {
    test('Modulo example: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('Power example: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('Square root example: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });
  });

  describe('Comprehensive Modulo Tests', () => {
    test('5 % 2 = 1 (from image)', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('7 % 3 = 1', () => {
      expect(modulo(7, 3)).toBe(1);
    });

    test('20 % 6 = 2', () => {
      expect(modulo(20, 6)).toBe(2);
    });

    test('15 % 4 = 3', () => {
      expect(modulo(15, 4)).toBe(3);
    });

    test('modulo with same number: 5 % 5 = 0', () => {
      expect(modulo(5, 5)).toBe(0);
    });

    test('modulo with result equal to divisor - 1: 4 % 5 = 4', () => {
      expect(modulo(4, 5)).toBe(4);
    });

    test('large modulo: 100 % 7 = 2', () => {
      expect(modulo(100, 7)).toBe(2);
    });

    test('modulo with decimals: 5.5 % 2 = 1.5', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
    });
  });

  describe('Comprehensive Power Tests', () => {
    test('2 ^ 3 = 8 (from image)', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('3 ^ 2 = 9', () => {
      expect(power(3, 2)).toBe(9);
    });

    test('4 ^ 2 = 16', () => {
      expect(power(4, 2)).toBe(16);
    });

    test('5 ^ 3 = 125', () => {
      expect(power(5, 3)).toBe(125);
    });

    test('10 ^ 2 = 100', () => {
      expect(power(10, 2)).toBe(100);
    });

    test('2 ^ 8 = 256', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('3 ^ 5 = 243', () => {
      expect(power(3, 5)).toBe(243);
    });

    test('base of 1: 1 ^ 100 = 1', () => {
      expect(power(1, 100)).toBe(1);
    });

    test('base of -1 with even exponent: (-1) ^ 2 = 1', () => {
      expect(power(-1, 2)).toBe(1);
    });

    test('base of -1 with odd exponent: (-1) ^ 3 = -1', () => {
      expect(power(-1, 3)).toBe(-1);
    });

    test('2 ^ -1 = 0.5', () => {
      expect(power(2, -1)).toBe(0.5);
    });

    test('10 ^ -1 = 0.1', () => {
      expect(power(10, -1)).toBe(0.1);
    });
  });

  describe('Comprehensive Square Root Tests', () => {
    test('√16 = 4 (from image)', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('√4 = 2', () => {
      expect(squareRoot(4)).toBe(2);
    });

    test('√9 = 3', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('√36 = 6', () => {
      expect(squareRoot(36)).toBe(6);
    });

    test('√49 = 7', () => {
      expect(squareRoot(49)).toBe(7);
    });

    test('√64 = 8', () => {
      expect(squareRoot(64)).toBe(8);
    });

    test('√81 = 9', () => {
      expect(squareRoot(81)).toBe(9);
    });

    test('√100 = 10', () => {
      expect(squareRoot(100)).toBe(10);
    });

    test('√144 = 12', () => {
      expect(squareRoot(144)).toBe(12);
    });

    test('√169 = 13', () => {
      expect(squareRoot(169)).toBe(13);
    });

    test('√0.01 = 0.1', () => {
      expect(squareRoot(0.01)).toBe(0.1);
    });

    test('√0.0001 = 0.01', () => {
      expect(squareRoot(0.0001)).toBe(0.01);
    });

    test('√2 ≈ 1.414', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('√3 ≈ 1.732', () => {
      expect(squareRoot(3)).toBeCloseTo(1.732, 3);
    });

    test('√5 ≈ 2.236', () => {
      expect(squareRoot(5)).toBeCloseTo(2.236, 3);
    });
  });

  describe('Square Root - Edge Cases and Negative Numbers', () => {
    test('√(-1) should throw error for negative input', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    });

    test('√(-4) should throw error for negative input', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('√(-100) should throw error for large negative', () => {
      expect(() => squareRoot(-100)).toThrow('Cannot calculate square root of a negative number');
    });

    test('√(-0.5) should throw error for negative decimal', () => {
      expect(() => squareRoot(-0.5)).toThrow('Cannot calculate square root of a negative number');
    });

    test('√(-0.001) should throw error for very small negative', () => {
      expect(() => squareRoot(-0.001)).toThrow('Cannot calculate square root of a negative number');
    });

    test('√0 = 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('√1 = 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('very large number: √1000000 = 1000', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('very small positive number: √0.000001 = 0.001', () => {
      expect(squareRoot(0.000001)).toBe(0.001);
    });
  });

  describe('Complex Combinations - All Extended Operations', () => {
    test('modulo result used in power: power(modulo(10, 3), 2) = 1^2 = 1', () => {
      const mod = modulo(10, 3);
      const result = power(mod, 2);
      expect(result).toBe(1);
    });

    test('power result used in squareRoot: squareRoot(power(3, 2)) = √9 = 3', () => {
      const pow = power(3, 2);
      const result = squareRoot(pow);
      expect(result).toBe(3);
    });

    test('modulo result used in squareRoot: squareRoot(modulo(20, 7)) = √6 ≈ 2.449', () => {
      const mod = modulo(20, 7);
      const result = squareRoot(mod);
      expect(result).toBeCloseTo(2.449, 3);
    });

    test('all three operations: power(squareRoot(modulo(36, 10)), 2) ≈ 4^2', () => {
      const mod = modulo(36, 10);
      const sqrt = squareRoot(mod);
      const result = power(sqrt, 2);
      expect(result).toBeCloseTo(mod, 1);
    });

    test('chain operations: modulo(power(2, 8), 100) = 256 % 100 = 56', () => {
      const pow = power(2, 8);
      const result = modulo(pow, 100);
      expect(result).toBe(56);
    });
  });
});
