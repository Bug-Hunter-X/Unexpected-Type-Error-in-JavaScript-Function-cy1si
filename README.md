# JavaScript Unexpected Type Error
This repository demonstrates a common JavaScript error: an unexpected type error when accessing the 'length' property of a null or undefined object.  The `foo` function attempts to determine the length of an input value, but does not handle cases where the input is not an array or string.

## Bug
The `bug.js` file contains the function that throws the error. If a null or undefined value is passed, the program will fail.

## Solution
The `bugSolution.js` file provides a corrected version of the function. It explicitly checks for null or undefined values before attempting to access the 'length' property, preventing the error.