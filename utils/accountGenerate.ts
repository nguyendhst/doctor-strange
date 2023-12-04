export const generateEmail = () => {
  var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  var email = "";
  for (let i = 0; i < 15; i++) {
    email += chars[Math.floor(Math.random() * chars.length)];
  }
  email += "@gmail.com";
  return email;
};
export const generatePassword = () => {
  var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  var password = "";
  for (let i = 0; i < 8; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
};
