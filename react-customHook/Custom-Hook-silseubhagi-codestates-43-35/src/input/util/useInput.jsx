import { useState } from 'react'
// useInput의 작동 원리 -> 인풋 로직 구현
// <Input> labaelname,value

function useInput(initalValue) {
  const [value, setValue] = useState(initalValue)

  const onChange = (e => {

    setValue(e.target.value);
  });

  const reset = (e => setValue(initalValue))

  return [value, onChange, reset]
}

export default useInput;

//input에서 구현되는 로직을
//커스텀Hook으로 만드는 곳.

// <input
//               value={firstNameValue}
//               onChange={(e) => setFirstNameValue(e.target.value)}
//               type="text"
//             />

// 참고 로직
// function useInputs(initialForm) {
//   const [form, setForm] = useState(initialForm);
//   // change
//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     setForm(form => ({ ...form, [name]: value }));
//   }, []);
//   const reset = useCallback(() => setForm(initialForm), [initialForm]);
//   return [form, onChange, reset];
// }
