function FormatCurrency(value) {
  try {
    // Check if the value is an integer or a string representation of an integer
    if (typeof value !== "number" && typeof value !== "string") {
      throw new Error(
        "Input must be an integer or a string representation of an integer"
      );
    }

    // Convert string to integer if needed
    let num = parseInt(value);
    if (isNaN(num)) {
      throw new Error("Input value cannot be converted to an integer");
    }

    // Format the number to include commas and .00
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } catch (error) {
    // Return the original input value if there's an error
    console.error(error.message);
    return value
  }
}

export default FormatCurrency;
