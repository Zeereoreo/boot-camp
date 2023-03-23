import { useState } from "react";
import useInput from "./util/useInput";
import Input from "./components/Input";
import shortid from "shortid";
import "./input.css";

const CustomInputExcercise = () => {
  //TODO : input에 들어가는 상태값 및 로직을 custom hook으로 구현합니다.
  //until 폴더에 useInput.js 파일이 만들어져 있습니다.
  const [firstValue, firstonChange, firstReset] = useInput("");
  const [lastValue, lastonChange, lastReset] = useInput("");
  const [nameArr, setNameArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userName = {
      id: shortid.generate(),
      first: firstValue,
      last: lastValue
    }
    setNameArr([...nameArr, userName]);

    firstReset()
    lastReset()
  };

  return (
    <div className="Input-wrap">
      <h1>Name List</h1>
      <div className="name-form">
        <form onSubmit={handleSubmit}>
          <Input labelName={"성"} value={firstValue} onChange={firstonChange} />{/* 인풋컴포넌트 사용하기 */}
          <Input labelName={"이름"} value={lastValue} onChange={lastonChange} /> {/* 인풋컴포넌트 사용하기 */}
          {/*           <div className="name-input">
            <label>성</label>
            <input
              value={firstNameValue}
              onChange={(e) => setFirstNameValue(e.target.value)}
              type="text"
            />
          </div>
          <div className="name-input">
            <label>이름</label>
            <input
              value={lastNameValue}
              onChange={(e) => setLastNameValue(e.target.value)}
              type="text"
            />
          </div> */}
          <button>제출</button>
        </form>
      </div>
      <div className="name-list-wrap">
        <div className="name-list">
          {nameArr.map((el) => {
            return <p key={el.id}>{el.first} {el.last}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default CustomInputExcercise;