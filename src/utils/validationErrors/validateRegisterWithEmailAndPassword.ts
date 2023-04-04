const validateRegisterWithEmailAndPassword = (
  error: Error,
  notifyCallback: (str: string) => void,
) => {
  if (error.message.includes("auth/weak-password")) {
    notifyCallback("Password should be at least 6 characters");
    return;
  }
  notifyCallback(error.message);
};

export default validateRegisterWithEmailAndPassword;
