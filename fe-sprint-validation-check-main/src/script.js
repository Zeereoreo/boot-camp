// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elinputUsername = document.querySelector('#username')
let elfailurMessge = document.querySelector('.failure-message')
let elsuccessMessge = document.querySelector('.success-message')
let elfirstPassword = document.querySelector('#password')
let elsecondPassword = document.querySelector('#password-retype')
let successPassword = document.querySelector('.mismatch-message')

elinputUsername.onkeyup = function () {
  if (isMoreThan4Length(elinputUsername.value)) {
    elsuccessMessge.classList.remove('hide')

    elfailurMessge.classList.add('hide')
  }
  else {
    elsuccessMessge.classList.add('hide')

    elfailurMessge.classList.remove('hide')
  }
}

elsecondPassword.onkeyup = function () {
  if (isMatch(elfirstPassword.value,elsecondPassword.value)){
    successPassword.classList.add('hide')
  }
  else {
    successPassword.classList.remove('hide')
  }
}

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2
}
