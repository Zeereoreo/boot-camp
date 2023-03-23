import { useEffect, useState } from "react";

//TODO : hooks.js의 이름도 custom hook의 규칙에 맞게 변경합니다.
const useFetch = (fetchUrl) => {

  //TODO : component 폴더의 fetch 컴포넌트에서 hook을 분리해옵니다.
  //분리해 온 hook을 이용하여 중심 로직을 마저 작성합니다.
  const [data, setData] = useState();

  useEffect(() => {
    fetch(fetchUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data;

};

export default useFetch;