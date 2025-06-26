export const emailValidator = (email) => {
  // Define a regular expression pattern that allows only letters and @
  const pattern = /^[A-Za-z@]+$/;

  // Test the input against the pattern
  if (pattern.test(email)) {
    return true; // Input is valid
  } else {
    return false; // Input is invalid
  }
};

export const zipCodeValidator = (input) => {
  // Define a regular expression pattern that allows only 6-digit numbers
  const pattern = /^\d{6}$/;

  // Test the input against the pattern
  if (pattern.test(input)) {
    return true; // Input is valid
  } else {
    return false; // Input is invalid
  }
};
export const onlyAlphabetValidator = (input) => {
  // Define a regular expression pattern that allows only letters and whitespace
  const pattern = /^[A-Za-z\s]+$/;

  // Test the input against the pattern
  if (pattern.test(input)) {
    return true; // Input is valid
  } else {
    return false; // Input is invalid
  }
};

export const phoneValiddator = (input) => {
  // Define a regular expression pattern that allows only 10-digit numbers
  const pattern = /^\d{10}$/;

  // Test the input against the pattern
  if (pattern.test(input)) {
    return true; // Input is valid
  } else {
    return false; // Input is invalid
  }
};

export const numberValidator = (input) => {
  // Define a regular expression pattern that allows only digits
  const pattern = /^\d+$/;

  // Test the input against the pattern
  if (pattern.test(input)) {
    return true; // Input is valid
  } else {
    return false; // Input is invalid
  }
};
