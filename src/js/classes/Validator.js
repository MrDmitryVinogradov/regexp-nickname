export default class Validator {
  constructor(username) {
    this.username = username;
  }
  validateUsername() {
    if (/^[^a-z]|\d{4,}|[^\w]|[^a-z]$/.test(this.username.toLowerCase())) {
      throw new Error('Wrong name');
    }
  }
}