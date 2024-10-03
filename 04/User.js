export default class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
    this.emailCheck();
    this.passwordCheck();
  }

  emailCheck() {
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let test = reg.test(this.email);
    if (!test) {
      throw new Error("email is incorrect");
    }
  }

  passwordCheck() {
    let password = this.password;
    if (password.split("").length < 6) {
      throw new Error("password lenght is inccorect");
    }
  }

  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  login() {
    const reg = /^[\w-\.]+@devmentor.pl/g;
    let test = reg.test(this.email);
    if (test) {
      return true;
    } else {
      return false;
    }
  }
}
