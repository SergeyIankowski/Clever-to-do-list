const validateSignInWithPasswordAndEmailErrors = (
  error: Error,
  notifyCallback: (str: string) => void,
) => {
  if (error.message.includes("auth/wrong-password")) {
    notifyCallback("Wrong password");
    return;
  }
  if (error.message.includes("auth/user-not-found")) {
    notifyCallback("User not found");
    return;
  }
  if (error.message.includes("auth/too-many-requests")) {
    notifyCallback("Too many wrong password requests");
    return;
  }
  notifyCallback(error.message);
};

export default validateSignInWithPasswordAndEmailErrors;
