const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the  hased value when an string is passed as an input", () => {
    const trivialKey = deterministicPartitionKey("some string")
    expect(typeof trivialKey).toBe("string")
  })

  it("Returns the  hased value when an number is passed as an input", () => {
    const trivialKey = deterministicPartitionKey(1998)
    expect(typeof trivialKey).toBe("string")
  })

});

