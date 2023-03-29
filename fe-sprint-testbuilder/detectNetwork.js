/**
 * 아래의 detectNetwork 함수는 어떤 카드 번호를 input으로 받아,
 * 카드 회사의 이름('MasterCard', 'American Express)을 return 하는 함수입니다.
 *
 * 예) detectNetwork('343456789012345') // 'American Express'
 *
 * 그럼 어떻게 카드 번호만 가지고, 카드회사를 알 수 있을까요?
 *
 * 2가지 방법이 있습니다.
 *  1. 앞 자리 숫자들 (이번 과제에서는 prefix라 부릅니다.)
 *  2. 숫자들의 길이 (이번 과제에서는 length라고 부릅니다.)
 */

function detectNetwork(cardNumber) {
  /**
   * 주의사항: 'cardNumber'는 항상 문자열입니다.
   * 'Diner's Club' 카드 번호는 항상 38이나 39로 시작을하고, 14 자리 숫자입니다.
   * 'American Express' 카드 번호는 항상 34 나 37로 시작하고, 15 자리 숫자입니다.
   * 이 글을 읽으셨다면, detectNetwork함수가 'Diner's Club', 'American Express'를
   * 정확히 검사할 수 있도록 만들고 브라우저 console 화면으로 돌아가세요.
   */
  // if(cardNumber.slice(0,2) === '38' || '39' && cardNumber.length === 14){
  //   return `Diner's Club`;
  // } if(cardNumber.slice(0,2) === '34' || '37' && cardNumber.length === 15){
  //   return `American Express`;
  // } if(cardNumber.slice(0,1) === '4' && cardNumber.length === 13 || cardNumber.length ===16 ||cardNumber.length === 19){
  //   return `Visa`;
  // } if(cardNumber.slice(0,2) === '51' ||cardNumber.slice(0,2) === '52' ||cardNumber.slice(0,2) === '53' ||cardNumber.slice(0,2) === '54'||cardNumber.slice(0,2) ==='55' && cardNumber.length === 16){
  //   return `MasterCard`;
  // }
  let test = cardNumber.slice(0,2)
  let testDiscover = cardNumber.slice(0,4)
  let Discovers = cardNumber.slice(0,3)

  if((test === '38'||'39')&&(cardNumber.length===14)){
    return `Diner's Club`;
  } if((test === '34'||'37')&&(cardNumber.length===15)){
    return 'American Express';
  } if((test[0] === '4')&&(cardNumber.length=== 13 || cardNumber.length===16 || cardNumber.length===19)){
    return 'Visa';
  } if((test === '51'|| test ==='52'|| test ==='53'|| test ==='54'|| test ==='55')&&(cardNumber.length===16)){
    return 'MasterCard';
  }
  if((testDiscover === '6011'|| test === '65'|| Discovers >= 644 || Discovers <=649) && (cardNumber.length===16 || cardNumber.length===19)){
    return "Discover"
  }
}

// you don't have to worry about this code. keep this code.

if (typeof window === "undefined") {
  module.exports = detectNetwork;
}
