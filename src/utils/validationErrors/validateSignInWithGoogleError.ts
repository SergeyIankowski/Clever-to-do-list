const validateSignInWithGoogleError = (
  error: Error,
  notifyCallback: (str: string) => void,
) => {
  notifyCallback(error.message);
};
export default validateSignInWithGoogleError;
