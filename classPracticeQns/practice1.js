const rawUsers = [
  { id: 1, name: "Rahul", password: "fb_password", role: "admin" },
  { id: 2, name: "Sanya", password: "123_password", role: "user" },
  { id: 3, name: "Amit", password: "secret_password", role: "user" }
];

// Task 
//  Use .map() and the Rest operator (...) to create a new array
// called 'safeUsers' that contains everything EXCEPT the password.

const data = rawUsers.map((details) => {
  const { password, ...safeUsers } = details
  console.log(safeUsers);

})

// 2. Use .filter() to create an array of 'admins' only.
const admins = rawUsers.filter(user => user.role === "admin")
console.log(admins);