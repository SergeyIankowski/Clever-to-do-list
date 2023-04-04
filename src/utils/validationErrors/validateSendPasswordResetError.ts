const validateSendPasswordResetError = (error: Error, notifyCallback: (str: string) => void) => {
  if (error.message.includes("auth/user-not-found")) {
    notifyCallback("User not found");
    return;
  }
  notifyCallback(error.message);
};

export default validateSendPasswordResetError;
