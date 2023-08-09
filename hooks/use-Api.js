/** @format */

const useApi = () => {
  const fetchData = async (url, parameters) => {
    let response = await fetch(url, parameters);
    if (response.status === 200) {
      let recvData = response.json();
      return recvData;
    }
  };

  return { fetchData };
};

export default useApi;
