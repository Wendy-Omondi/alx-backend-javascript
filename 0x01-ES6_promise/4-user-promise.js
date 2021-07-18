function signUpUser(firstName, lastName) {
  let a = new Promise((resolve) => {
    resolve(
      { firstName, lastName });
    });
  return a;
}

export default signUpUser;
