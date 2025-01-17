function foo(a) {
  if (a === null || a === undefined || typeof a.length !== 'number') {
    return 0; // Handle null, undefined, and non-string/array cases
  }
  return a.length; 
}