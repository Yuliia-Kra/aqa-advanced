const users = [
    { name: "Yuliia", age: 7, email: "test1@test.com" },
    { name: "Oleksandr", age: 29, email: "test2@test.com" },
    { name: "Sergii", age: 41, email: "test3@test.com" }
  ];
  for (const { name, age, email } of users) {
    console.log(`${name} is ${age} years old and email is ${email}`);
  }