## Custom Hook 실습

- 기존에 존재하던 로직이나 컴포넌트를 Custom Hook으로 구현하는 실습은 총 2개가 있습니다.
  - 각 실습의 분리를 위해 fetch와 input이라는 폴더 명을 주었으며, 각기 실습해야 할 컴포넌트들이 들어있습니다.
  - fetch 폴더가 실습 1이며, input 폴더가 실습 2입니다. 실습 1부터 페어와 함께 구현을 합니다.
  - CustomFetchExcercise, CustomInputExcercise 라는 이름으로 App 컴포넌트에 연결이 되어 있습니다.

### 실습 설명

1. fetch 로직이 담긴 useEffect hook을 custom hook으로 구현하는 실습
   - 특히 get 요청을 보내는 fetch 로직을 담은 useEffect hook은 2개 이상의 컴포넌트에서 재활용이 될 수 있습니다.
   - 이런 useEffect hook을 분리하여 custom hook으로 만들 수 있다면 유지보수성이나 재활용하기 수월해질 것입니다.
     
2. input에 들어가는 상태값 및 로직을 custom hook으로 구현하는 실습
   - input이나 form 같이 유저의 정보를 입력 받는 컴포넌트의 로직 또한 분리해서 사용할 수 있습니다.
   - 로직을 분리를 해서 재활용을 하게 된다면, 기존의 길던 코드의 줄이 압축이 되어 컴포넌트의 직관성이 높아집니다.

