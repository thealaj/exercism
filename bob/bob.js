//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  input_array = input.split("")
  last_symbol = input_array[input_array.length - 1]

  if (input.toUpperCase() === input && (input.match(/^[a-zA-Z]/) || last_symbol === "!")) {
    return "Whoa, chill out!"
  }
  else if (last_symbol == "?") {
    return "Sure."
  } else if (input.search(/\S/) === -1 ) {
    return ("Fine. Be that way!")
  } else {
  return "Whatever."
  }
};

module.exports = Bob;
