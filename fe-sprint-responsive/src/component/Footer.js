import styled from 'styled-components';
import '../App.css';
import ChatInput from "./ChatInput"

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.div`
  width: 100%;
  /* height: 100px; */
  padding: 8px 28px 0 28px;
  margin: 0 auto;
  text-align: center;
  color: #868e96;
  .footer_bottom {
    width: 100%;
  }
   span {
    font-size: .75rem;
   }
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
  }
`;

const Footer = () => {
  return (
    <div className="footer">
      <ChatInput />
      <Wrapper>
        <div className="footer_bottom">
          <span>ChatGPT Mar 14 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</span>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;