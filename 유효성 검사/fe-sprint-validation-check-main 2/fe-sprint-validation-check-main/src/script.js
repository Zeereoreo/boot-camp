// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elinputUsername = document.querySelector('#username')
let elfailurMessge = document.querySelector('.failure-message')
let elsuccessMessge = document.querySelector('.success-message')
let elfirstPassword = document.querySelector('#password')
let elsecondPassword = document.querySelector('#password-retype')
let successPassword = document.querySelector('.mismatch-message')
let btn = document.querySelector('button');
let googleBtn = document.querySelector('.google')
let naverBtn = document.querySelector('.naver')
let kakaoBtn = document.querySelector('.kakao')

let usernameOkay = false;
let pwOkay = false;

elinputUsername.onkeyup = function () {
  if (CheckEmail(elinputUsername.value)) {
    elsuccessMessge.classList.remove('hide')
    elfailurMessge.classList.add('hide')
    usernameOkay = true;
  }
  else {
    elsuccessMessge.classList.add('hide')
    elfailurMessge.classList.remove('hide')
    usernameOkay = false;
  }
}

elsecondPassword.onkeyup = function () {
  if (isMatch(elfirstPassword.value,elsecondPassword.value)){
    successPassword.classList.add('hide')
    pwOkay = true;
  }
  else {
    successPassword.classList.remove('hide')
    pwOkay = false;
  }
}
googleBtn.onclick = function () {
  alert ("구글 연동 중 입니다.")
}
naverBtn.onclick = function () {
  alert ("네이버 연동 중 입니다.")
}
kakaoBtn.onclick = function () {
  alert ("카카오톡 연동 중 입니다.")
}

document.onkeyup = function () {
  if (usernameOkay && pwOkay) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
};

// function isMoreThan4Length(value) {
//   // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
//   return value.length >= 4
// }

function CheckEmail(str) {
  const reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}



function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2
}

const outer = document.querySelector('.outer');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
})

/*
  div사이즈 동적으로 구하기
*/

innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

/*
  주기적으로 화면 넘기기
*/
const getInterval = () => {
  return setInterval(() => {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
  }, 2000);
}

let interval = getInterval(); // interval 등록