import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName), // returns a promise
    uploadPhoto(fileName), // returns a promise
  ]).then((results) => results.map((result) => ({
    status: result.status, // status of the promise
    value: result.status === 'fulfilled' ? result.value : result.reason, // resolved value or reason for rejection
  })));
}
