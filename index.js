const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey("abc"))
console.log(deterministicPartitionKey(12345));
console.log(deterministicPartitionKey(false));
console.log(deterministicPartitionKey(true));