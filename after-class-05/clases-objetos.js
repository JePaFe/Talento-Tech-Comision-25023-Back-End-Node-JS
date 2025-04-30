// function User(email, password) {
//   this.email = email;
//   this.password = password;
// }

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const user1 = new User("1@x.com", "123");
const user2 = new User("2@x.com", "124563");

console.log(user1);
console.log(user2);
