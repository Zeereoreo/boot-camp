import React, {useState} from "react";
import styled from "styled-components";
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  background: #00ADB5;

  z-index: 5;
  cursor: pointer;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 89%;
  top: 83%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: #EEEEEE;
  border-radius: 50%;
  border: none;
  outline: none;

`;

const InsertFormPositioner = styled.div`
  width: 100%;
  top: 25%;
  left: 0;
  position: relative;
`;

const InsertForm = styled.form`
  background: #EEEEEE;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const Todoinsert = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        setValue('');
        setOpen(false);
       
      };
    return (
        <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="작심일일 START"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
    )
}
export default Todoinsert;