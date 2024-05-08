export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Add your asynchronous API call or any other logic here
    // For demonstration, we'll resolve the Promise immediately
    resolve("Response from API");
  });
}
