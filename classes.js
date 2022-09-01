class User {
  constructor(name, username) {
    (this.name = name), (this.username = username);
  }

  getuser() {
    console.log(this.username + " has name as " + this.name);
  }
}

const rahul = new User("Rahul", "rahulk216");
rahul.getuser();

class Member extends User {
  constructor(name, username) {
    super(name, username);
  }
  getMemberuser() {
    console.log(this.username + " has name as " + this.name);
  }
}

const test = new Member('test','test123');
test.getMemberuser();
