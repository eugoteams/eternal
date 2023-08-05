/** @format */

export default async function apiCaller(url) {
  let callerPromise = new Promise(async (resolve, reject) => {
    let response = await fetch(url, {
      method: "GET",
    });
    let responseData = await response.json();
    resolve(responseData);
  });
  return callerPromise;
}
