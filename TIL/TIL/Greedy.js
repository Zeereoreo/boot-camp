function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.
  // 배열을 정렬해준다. : sort() 메소드 사용
  let sorted = stuff.sort((a,b) => a-b);
  let count = 0;
  // 배열의 가장 왼쪽요소 : index 기준 [1, 2, 3] 0번째
  let left = 0;
  // 배열의 가장 오른쪽 요소 : index 기준 [1,2,3] 3-1번째 2 index
  let right = sorted.length - 1

  // 배열의 요소가 모두 제거 될때까지 {조건 : 오른쪽 박스가 왼쪽 박스의 요소보다 작아지면 }
  while(left <= right){
  // 배열의 가장 왼쪽 요소와 배열의 가장 오른쪽 요소를 더한다
    let sum = sorted[left] + sorted[right];
  // 더한 값이 limit 보다 클 경우
  if(sum>limit){
  // 가장 오른쪽 요소를 제거해주고 (박스에담고)
  // index를 기준으로 움직이고 있음 (포인터가)
    right --;
  // 카운트를 센다.
    count ++;
  }
  else {
  // 더한 값이 limit보다 작을 경우
  // 두 요소 모두 제거하고
    right--;
    left++;
  // 카운트를 센다.
    count ++;;
  }
  }
  return count;
}