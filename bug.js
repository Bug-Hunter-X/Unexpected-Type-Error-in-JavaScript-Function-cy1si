function foo(a) {
  if (a === null) {
    return 0; // Handle null case
  }
  return a.length; // Potential error if 'a' is not an array or string
}