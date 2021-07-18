/* eslint-disable */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const users = await signUpUser(firstName, lastName).then((data) => ({
    status: 'sucess',
    value: data,
  }));

  const files = await uploadPhoto(fileName).catch((err) => ({
    status: 'rejected',
    value: err.toString(),
  }));

  return Promise.resolve([users, files]);
}
