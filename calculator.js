function add(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    return "Invalid";
  }

  return x + y;
}

function subtract(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    return "Invalid";
  }

  return x - y;
}

module.exports = { add, subtract };
