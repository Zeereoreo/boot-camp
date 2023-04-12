import React,{useState,useEffect} from "react";
import { ImMenu , ImCalendar} from "react-icons/im";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const HeaderLine = styled.div`
    display : flex;
    justify-content : space-around;
    align-items: center; 
    color: #EEEEEE;
    cursor: pointer;
`;    

const ModalContainer = styled.div`
  margin: auto;
  position: fixed;
  z-index: 2;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Header = () => {

const [value, onChange] = useState(new Date());
const [isModalOpen, setIsModalOpen] = useState(false);

const modalHandler = (e) => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    setIsModalOpen(false);
  }, [value]);



return (
    <>
    <HeaderLine >
        <ImMenu className="icon-button" />
        <h1>매일 작심일일</h1>
        <ImCalendar onClick={modalHandler} className="icon-button" />
    </HeaderLine>
    <ModalContainer>
            {isModalOpen && (
                <ModalBackdrop>
                    <Calendar onChange={onChange} value={value} />
                </ModalBackdrop>
            )}
        </ModalContainer>
    </>    

    );
}
export default Header;