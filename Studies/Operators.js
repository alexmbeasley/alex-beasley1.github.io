/**
 * OPERATORS:
 * 
 * 1. Assignment Operators:
 *    - Assignment operators are used to assign values to variables.
 *    - The most common assignment operator is the = operator, which assigns the value to the declared variable. 
 *    - Other assignment operators include +=, -=, *=, /=, %=, and **=.
 * 
 * 2. Arithmetic Operators:
 *    - Arithmetic operators are used to perform mathematical calculations.
 *    - Common arithmetic operators include + (add), - (subtract), * (multiply), ** (exponet), / (dividde), % (modulus), ++ (increment), -- (decrement).
 *    - The modulus operator returns the remainder of a division operation. This is usually used to check if a number is even or odd.
 * 
 * 3. Comparison Operators:
 *    - Comparison operators are used to compare values and return a boolean value (true or false).
 *    - Common comparison operators include == (equal to), === (equal value and type) != (not equal to), !== (not equal value or type)
 *  > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to).
 * 
 * 4. Logical Operators:
 *    - Logical operators are used to detrmine the logic between variables or values.
 *    - The three logical operators are && (and), || (or), and ! (not).
 *    - The logical AND returns true if both operands are true, the logical OR returns true if at least one operand is true, and the logical NOT returns the opposite value.
 * 
 * 5. Unary Operators:
 *    - Unary operators operate on a single operand.
 *    - The unary ! (logical NOT) operator changes the boolean value.
 *    - The unary typeof operator returns a string that represents the data type.
 *    - The unary - operator creates the negative value.
 * 
 * 6. Ternary Operator:
 *    - The ternary operator, also known as the conditional operator, is a way of writing an if statement.
 *    - It takes three operands: a condition followed by a ? symbol, an expression to evaluate if true, and another expression to evaluate if the condition is false.
 *    - It returns the value of either the true expression or the false expression based on the condition.
 */

// 1. Assignment Operators
var x = 5;
var y = 10;
//addition
x += y; // => 15
//subtraction
x -= y; // => -5
//multiply
x *= y; // => 50
//divide
y /= x; // => 2
//remainder
x %= y; // => 5
//exponent
x **=y; // => 9,765,625

// 2. Arithmetic Operators
var a = 10;
var b = 5;
var sum = a + b; // => 15
var subtract = a - b; // => 5
var multiply = a * b; // => 60
var divide = a / b; // => 2
var modulus = a % b; // => 0

// 3. Comparison Operators
var num1 = 5;
var num2 = 10;
var isEqual = num1 == num2; // => false
var isNotEqual = num1 != num2; // => true
var isGreaterThan = num1 > num2; // => false
var isLessThan = num1 < num2; // => true
var isGreaterOrEqual = num1 >= num2; // => false
var isLessOrEqual = num1 <= num2; // => true

// 4. Logical Operators
var val1 = true;
var val2 = false;
var and = val1 && val2; // => false
var or = val1 || val2; // => true
var not = !val1; // => false

// 5. Unary Operators
var booleanValue = true;
var type = typeof booleanValue;
var negative = -10;

// 6. Ternary Operator
var age = 26;
var beverage = age >= 21 ? "Beer" : "Juice"; // => Beer