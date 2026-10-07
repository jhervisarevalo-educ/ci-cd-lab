const { add, subtract } = require("./calculator");

// Test 1
test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

// Test 2
test("subtracts 8 - 3 to equal 5", () => {
  expect(subtract(8, 3)).toBe(5);
});

// Test 3
test("adds 2 " + "Text" + "to return invalid", () => {
  expect(add(2, "Text")).toBe("Invalid");
});
