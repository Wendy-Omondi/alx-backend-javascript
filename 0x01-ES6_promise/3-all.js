/* eslint-disable */
import { uploadPhoto, createUser } from './utils';


export default function handleProfileSignup() {
  let body
  let firstName
  let LastName

  return uploadPhoto()
    .then((data) => {
      body = data.body;
      createUser()
        .then((data) => {
          firstName = data.firstName;
          lastName = data.lastName;
          console.log(`${body} ${firstName} ${lastName}`);
        })
        .catch(() => new Error(console.log('Signup system offline')));
    })
}
