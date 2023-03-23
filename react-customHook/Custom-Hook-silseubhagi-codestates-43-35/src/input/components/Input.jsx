function Input({ labelName, value, onChange }) {
  // TODO : input의 로직을 유의하며 컴포넌트로 분리합니다.

  return (
    <div className="name-input">
      <label>{labelName}</label>
      <input onChange={onChange} value={value} type="text" />
    </div>
  );
}

export default Input;

