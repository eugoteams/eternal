/** @format */

export default async function apiCaller(url) {
  let callerPromise = new Promise(async (resolve, reject) => {
    let response = await fetch(url, {
      method: "GET",
    });
    let responseData = await response.json();

    console.log("status", Array.isArray(responseData));
    if (responseData.length > 0) {
      resolve(responseData);
    }
  });
  return callerPromise;

  //   return callerPromise.then(
  //     (responseData) => {
  //       console.log("netere here", responseData.length);
  //       return responseData;
  //     },
  //     (reject) => {}
  //   );
}
