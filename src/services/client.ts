export const getStaticVariables = () => {
  const apiKey = process.env.API_KEY;
  const apiUrl = process.env.API_URL;

  if (apiKey && apiUrl) {
    return { apiKey, apiUrl };
  }
  throw new Error("Environment variables are undefined.");
};
