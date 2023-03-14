// 장보고 나온 사람들을 순서대로 넣어주기 박스의 수[boxes]와 같이
// 빠질 때, boxes의 갯수를 비교? 
// 비교 대상을 정하고
// front의 수보다 뒤의 수가 클 경우빠져 나오고
// front의 수보다 뒤의 수가 작을 경우 못 빠져 나오게 된다.
// 빠져 나올 때의 값을 모아 둔 후, 가장 큰 값을 리턴

// // boxes = [1, 5, 3, 2]
// function paveBox(boxes) {
//   // TODO: 여기에 코드를 작성합니다.
//   const queue = [];
//   let count = [];    // 못 빠져 나오는 사람의 수를 저장할 변수
  
//   for(let i = 0; i < boxes.length; i++){  //
//     let max = 0
//     if(max < boxes[i]){  // 비교대상을 정해야하지 않을까
//     max = boxes[i]       // max = 0 -> 1로 바뀌었을 때 
//     count.push(i+1)         // 카운트의 값을 리턴?? 아니면 변수에 저장???
//   } else {              // 기준점인 max의 값이 변하지 않았을 때는
//     count               // 카운트의 값을 더 해준다. 
//   }
// }
// return Math.max(...count) // 카운트의 최대 값을 리턴
// }

// // 

// function paveBox(boxes) {
//   let now = boxes[0];
//   let count, max = 1;

//   for(let i = 1; i<boxes.length; i++){
//       if(boxes[i] <= now) {
//           count++;
//       }
//       else if (boxes[i] > now) {
//           count = 1;
//           now = boxes[i];
//       }

//       if(max < count) {
//           max = count;
//       }
//   }
//   return max;
// }
function paveBox(boxes) {
    let answer = [];
    
    // boxes 배열이 0보다 클 때까지 반복합니다.
    while(boxes.length > 0){
        let finishIndex = boxes.findIndex(fn => boxes[0] < fn);
        
        if(finishIndex === -1){
            // 만약 찾지 못했다면 answer에 boxes 배열의 길이를 넣은 후, boxes 내부의 요소를 전부 삭제합니다.
            answer.push(boxes.length);
            boxes.splice(0, boxes.length);

        } else {
            // 만약 찾았다면, 해당 인덱스를 answer에 넣고, boxes에서 그만큼 제외합니다.
            answer.push(finishIndex);
            boxes.splice(0, finishIndex);
        }
    }

    // 결과물을 반환합니다.
    return Math.max(...answer);
}