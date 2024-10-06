import { uploadPhoto, createUser } from './utils'; // Importing functions without .js extension

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto(); // Call uploadPhoto
    const userResponse = await createUser(); // Call createUser

    // Return the responses in the desired format
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Return an empty object if any of the async functions fail
    return {
      photo: null,
      user: null,
    };
  }
}
