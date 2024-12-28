function foo(a, b) {
  if (a === null || b === null) {
    return null; // Explicitly handle null values
  }
  // ... rest of your function
  return a + b; // Example operation
}