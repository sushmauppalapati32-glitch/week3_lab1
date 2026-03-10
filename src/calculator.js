#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * Supports basic and advanced arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (√)
 */

// Addition operation
function add(a, b) {
  return a + b;
}

// Subtraction operation
function subtract(a, b) {
  return a - b;
}

// Multiplication operation
function multiply(a, b) {
  return a * b;
}

// Division operation with zero-division handling
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Modulo operation - returns remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot calculate modulo by zero');
  }
  return a % b;
}

// Exponentiation operation - returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root operation with error handling for negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// Parse command-line arguments and perform calculation
function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: calculator <number1> <operation> [number2]');
    console.log('');
    console.log('Basic Operations (require 2 operands):');
    console.log('  +  : Addition');
    console.log('  -  : Subtraction');
    console.log('  *  : Multiplication');
    console.log('  /  : Division');
    console.log('  %  : Modulo (remainder)');
    console.log('  ** : Exponentiation (power)');
    console.log('');
    console.log('Advanced Operations (single operand):');
    console.log('  √  : Square root');
    console.log('');
    console.log('Examples:');
    console.log('  calculator 10 + 5      # Output: 10 + 5 = 15');
    console.log('  calculator 10 - 4      # Output: 10 - 4 = 6');
    console.log('  calculator 45 \\* 2     # Output: 45 * 2 = 90');
    console.log('  calculator 20 / 5      # Output: 20 / 5 = 4');
    console.log('  calculator 10 % 3      # Output: 10 % 3 = 1');
    console.log('  calculator 2 \\*\\* 3    # Output: 2 ** 3 = 8');
    console.log('  calculator √ 16        # Output: √16 = 4');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];
  const num2 = args[2] ? parseFloat(args[2]) : null;

  // Single-operand operations
  const singleOperandOps = ['√'];
  const isSingleOp = singleOperandOps.includes(operation);

  if (isSingleOp) {
    if (isNaN(num1)) {
      console.error('Error: Please provide a valid number');
      process.exit(1);
    }
  } else {
    if (args.length < 3) {
      console.error(`Error: Operation '${operation}' requires two operands`);
      process.exit(1);
    }
    if (isNaN(num1) || isNaN(num2)) {
      console.error('Error: Please provide valid numbers');
      process.exit(1);
    }
  }

  let result;

  try {
    switch (operation) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      case '%':
        result = modulo(num1, num2);
        break;
      case '**':
        result = power(num1, num2);
        break;
      case '√':
        result = squareRoot(num1);
        console.log(`√${num1} = ${result}`);
        process.exit(0);
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: +, -, *, /, %, **, √');
        process.exit(1);
    }

    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  main
};

// Only run main if script is executed directly
if (require.main === module) {
  main();
}
