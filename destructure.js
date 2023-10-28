const obj = {
  name: "some name",
  email: "user@example.com",
  password: "sometext",
};

const { password, ...rest } = obj;

console.log(rest);
