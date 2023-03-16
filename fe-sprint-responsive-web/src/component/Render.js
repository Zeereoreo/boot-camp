import styled from 'styled-components';
import '../App.css';

const MainArea = styled.div`
  /* background-image: url('https://i.pinimg.com/564x/25/2a/85/252a8531ff0b79234be74178758db6da.jpg');
  background-repeat: no-repeat;
  background-position: bottom; */

  max-height: 864px;
  height: 100vh;
  width: 100%;
  /* overflow: hidden; */
  padding: 128px 0px 0 0px;
  overflow: scroll;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  > h1 {
    margin-top: 191.2px;
    margin-bottom: 64px;
  }
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  /* flex-basis: 1; */
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
   ul {
    display: flex;
    flex-direction: column;
    font-size: 14px;
   }
   li {
    background-color: #F7F7F8;
    border-radius: 10px;
    padding: 12px;
    margin: 14px;
   }
   li.button {
    cursor: pointer;
    &:hover {
      background-color: #D9D9E3;
    }
   }
`

const Render = () => {
  return (
    <>
      <MainArea>
        <Header className='header'>
          <h1>ChatGPT</h1>
        </Header>
        <FlexContainer>
          <div>
            <h2>Examples</h2>
            <ul>
              <li className='button'>"Explain quantum computing in simple terms" →</li>
              <li className='button'>"Got any creative ideas for a 10 year old’s birthday?" →</li>
              <li className='button'>"How do I make an HTTP request in Javascript?" →</li>
            </ul>
          </div>
          <div>
            <h2>Capabilities</h2>
            <ul>
              <li>Remembers what user said earlier in the conversation</li>
              <li>Allows user to provide follow-up corrections</li>
              <li>Trained to decline inappropriate requests</li>
            </ul>
          </div>
          <div>
            <h2>Limitations</h2>
            <ul>
              <li>May occasionally generate incorrect information</li>
              <li>May occasionally produce harmful instructions or biased content</li>
              <li>Limited knowledge of world and events after 2021</li>
            </ul>
          </div>
        </FlexContainer>
      </MainArea>
    </>
  );
};

export default Render;
