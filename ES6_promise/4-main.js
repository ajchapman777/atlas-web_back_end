// 4-main.js

import signUpUser from "./4-user-promise";

signUpUser("Bob", "Dylan")
  .then(user => {
    console.log(user);
  });
