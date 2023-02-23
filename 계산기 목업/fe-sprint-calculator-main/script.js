const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.


// 첫 번째 숫자, 연산자, 두 번째 숫자를 확정해야 합니다.
// 위 세 가지를 함수 calculate에 전달하고, 돌려받은 결괏값이 마지막 칸에 입력되어야 합니다.

function calculate(n1, inputOperator, n2) {
  let result;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.

  if (inputOperator === '+'){
    result = n1 + n2;
  } else if (inputOperator === '-'){
    result = n1 - n2;      
  } else if (inputOperator === '*'){
    result = n1 * n2;
  } else if (inputOperator === '/'){
    result = n1 / n2;
  }

  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.
 
  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    
    // 1. 첫 번째 칸에 입력된 내용이 있는지, 없는지 구분해야 합니다.
    // 2. 첫 번째 칸에 입력된 내용이 0(기본값)이 아니라면, 이미 숫자가 입력된 상태로 볼 수    있습니다.
    // 3. 첫 번째 숫자가 0이 아닌 경우, 버튼을 클릭하면 두 번째 칸에 버튼에 적혀있는 숫자를 입력합니다.
    
        
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      console.log('숫자 ' + buttonContent + ' 버튼');
      
        if (firstOperend.textContent === '0' ) { // '0'이 string 값이 맞는가 ??
          console.log('숫자 ' + buttonContent + ' 버튼')
          firstOperend.textContent = buttonContent;
        } else {
          secondOperend.textContent = buttonContent;
        }
    }
    
    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator.textContent = buttonContent;
    }

    if (action === 'decimal') {
      console.log('소수점 버튼');
       
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent = 0;
      secondOperend.textContent = 0;
      operator.textContent = '+';
      calculatedResult.textContent = 0;
    }

    if (action === 'calculate') {
      console.log('계산 버튼');

      n1 = Number(firstOperend.textContent);
      n2 = Number(secondOperend.textContent);
      inputOperator = operator.textContent;

      let answer = calculate(n1, inputOperator, n2);
      
      calculatedResult.textContent = answer;
    }
  }
});




// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

// 1. 기본값인 0이 계산기의 화면에 나타나고 있는 경우, 0이 아닌 다른 숫자가 적힌 버튼을 눌러 0 대신 눌린 버튼의 숫자로 변경 //
// 2. 0이 아닌 다른 값이 계산기의 화면에 나타나는 경우, 누른 버튼의 값이 계산기의 화면에 나타나있는 숫자 뒤에 이어 붙습니다(concatenation).//


const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum;
let operatorForAdvanced;
let previousKey;
let previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

previousNum = display.textContent;
  
function calculate(firstNum, operatorForAdvanced, previousNum){
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.


  if (operatorForAdvanced === '+'){
    result = parseFloat(firstNum) + parseFloat(previousNum);
  } else if (operatorForAdvanced === '-'){
    result = parseFloat(firstNum) - parseFloat(previousNum);      
  } else if (operatorForAdvanced === '*'){
    result = parseFloat(firstNum) * parseFloat(previousNum);
  } else if (operatorForAdvanced === '/'){
    result = parseFloat(firstNum) / parseFloat(previousNum);
  }

  return String(result);
}


  
  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {

    if (action === 'number') {
      if (display.textContent === '0' || previousKey === 'operator') {
          display.textContent = buttonContent;
        } else {
          display.textContent = display.textContent.concat(buttonContent);
        } 
        previousKey = 'number';
      } 
    
      //연산자 버튼을 클릭했을 때, 먼저 입력된 숫자와 새롭게 입력받을 숫자를 구분해야 합니다. 변수 firstNum에, 먼저 입력된 숫자를 할당하는 것으로 해결할 수 있습니다.//
    if (action === 'operator') {
      operatorForAdvanced = buttonContent;
      previousKey = 'operator';
      firstNum = display.textContent;
    }

    // . 버튼을 활용하여, 소수를 입력받으세요.//
    // . 버튼을 연속적으로 눌러도 .은 처음 단 한 번만 입력되어야 합니다.//
    // 정수 부분 없이 . 버튼과 숫자를 눌러서 작동시키는 경우 소수가 나타나야 합니다. (.5 === 0.5 )//

    if (action === 'decimal') {
      if (display.textContent.includes('.') !== true){
        if (display.textContent !== 0){
          display.textContent = display.textContent.concat(buttonContent);
        } else {
          display.textContent = '0'.concat(buttonContent);
        }
      }
      previousKey = 'decimal';
    } 

    
    if (action === 'clear') {
        // 1. 계산기에 입력되었던 첫 번째 값
        firstNum = undefined;
        // 2. 연산자
        operatorForAdvanced = undefined;
        // 3. 계산기에 입력되었던 두 번째 값
        previousNum = undefined;
        // 4. 화면
        display.textContent = 0;
      previousKey = 'clear';
}
    
    if (action === 'calculate') {
      display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
      previousKey = 'calculate';
    }
  }
});



// 버튼 초록색으로 바꾸는 이벤트 넣기
// const green = document.querySelector('.operator');
// function color(){
//   green.classList.add('isPressed');
// }