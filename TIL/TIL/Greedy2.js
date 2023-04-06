function partTimeJob(k) {
    // TODO: 여기에 코드를 작성하세요.
  
    //동전 카운팅할 변수 선언 및 초기화
    let count = 0;
    //500원으로 거스름돈을 초과하기 직전만큼 거슬러준다
    while(k - 500 >= 0){
    // 거슬러 준 돈 만큼 거슬름돈에서 빼준다
    k = k - 500;
    // 거슬러 준 동전 개수만큼 count에 더해준다
    count = count + 1;
    }
     while(k - 100 >= 0){
    // 거슬러 준 돈 만큼 거슬름돈에서 빼준다
    k = k - 100;
    // 거슬러 준 동전 개수만큼 count에 더해준다
    count = count + 1;
    }
     while(k - 50 >= 0){
    // 거슬러 준 돈 만큼 거슬름돈에서 빼준다
    k = k - 50;
    // 거슬러 준 동전 개수만큼 count에 더해준다
    count = count + 1;
    }
     while(k - 10 >= 0){
    // 거슬러 준 돈 만큼 거슬름돈에서 빼준다
    k = k - 10;
    // 거슬러 준 동전 개수만큼 count에 더해준다
    count = count + 1;
    }
    while(k - 5 >= 0){
    // 거슬러 준 돈 만큼 거슬름돈에서 빼준다
    k = k - 5;
    // 거슬러 준 동전 개수만큼 count에 더해준다
    count = count + 1;
    }
     while(k - 1 >= 0){
    // 거슬러 준 돈 만큼 거슬름돈에서 빼준다
    k = k - 1;
    // 거슬러 준 동전 개수만큼 count에 더해준다
    count = count + 1;
    }
    // 빼준 거스름돈에서 그 다음 작은 단위의 동전으로 1~3을 반복한다
    // 거스름돈이 0원이 되면 카운트를 리턴한다
    return count;
  }
  
  
  // function partTimeJob(k) {
  //   let result = 0;
  //   const wallet = [500, 100, 50, 10, 5, 1];
  //   for(let i = 0; i < wallet.length; i++) {
  //     if(k > 0) {
  //       const sum = Math.floor(k / wallet[i]);
  //       result += sum;
  //       k = k - (wallet[i] * sum);
  //       // k%= wallet[i]
  //     }
  //   }
  //   return result;
  // }
  