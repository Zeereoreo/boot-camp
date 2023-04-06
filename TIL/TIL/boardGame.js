function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.

    //최초 시작지점의 좌표를 x=0 , y=0 으로 할당한다(x 가로, y 세로)
    let x = 0;
    let y = 0;

    let count = 0;

    //유효하면 true, 유효하지 않으면 false
    function isValid(x, y) {
        //유효하지 않을 때
        // 1. 좌표가 어느 하나라도 음수(-)
        // 2. 좌표가 보드의 최대 크기보다 클 때 
        //(인덱스 최대 크기는 length - 1 이므로 length와 같은 것도 나갔다고 간주) 
        if (x < 0 || y < 0 || x >= board[0].length || y >= board.length) {
            return false;
        }
        return true;
    }

    //operation 문자열을 처음부터 끝까지 따라가면서, (순회) => for문
    for (let i = 0; i < operation.length; i++) {
        //문자에 따라 x, y를 조작한다.(위치를 이동시킨다.)
        if (operation[i] === "U") {
            //up일 때 위로 올라가야 됨! 현재 y축 좌표에서 -1
            y = y - 1;
            //이동 결과 보드판에서 떨어지면 즉시 “OUT”을 리턴한다.
            if (!isValid(x, y)) {
                return "OUT";
            }
            //board[y][x](이동한 위치)가 1이라면 count에 1을 더한다.
            if (board[y][x] === 1) {
                count++;
            }
        }

        if (operation[i] === "D") {
            //down일 때 아래로 올라가야 됨! 현재 y축 좌표에서 +1
            y = y + 1;
            //이동 결과 보드판에서 떨어지면 즉시 “OUT”을 리턴한다.
            if (!isValid(x, y)) {
                return "OUT";
            }
            //board[y][x](이동한 위치)가 1이라면 count에 1을 더한다.
            if (board[y][x] === 1) {
                count++;
            }
        }

        if (operation[i] === "R") {
            //right일 때 오른쪽으로 이동해야 됨! 현재 x축 좌표에서 +1
            x = x + 1;
            //이동 결과 보드판에서 떨어지면 즉시 “OUT”을 리턴한다.
            if (!isValid(x, y)) {
                return "OUT";
            }
            //board[y][x](이동한 위치)가 1이라면 count에 1을 더한다.
            if (board[y][x] === 1) {
                count++;
            }
        }

        if (operation[i] === "L") {
            //right일 때 오른쪽으로 이동해야 됨! 현재 x축 좌표에서 -1
            x = x - 1;
            //이동 결과 보드판에서 떨어지면 즉시 “OUT”을 리턴한다.
            if (!isValid(x, y)) {
                return "OUT";
            }
            //board[y][x](이동한 위치)가 1이라면 count에 1을 더한다.
            if (board[y][x] === 1) {
                count++;
            }
        }

    }

    //operation 문자열을 끝까지 따라간 후 count를 리턴한다.
    return count;
};


// // LOOK UP TABLE을 사용한다면 조건문을 추상화시킬 수 있습니다.
// function boardGame(board, operation) {
//   // TODO: 여기에 코드를 작성하세요.
//   const DIR = {
//     'U': [-1, 0],
//     'D': [1, 0],
//     'L': [0, -1],
//     'R': [0, 1]
//   }
//   const LEN = board.length;
//   const isValid = (y, x) => 0 <= y && y < LEN && 0 <= x && x < LEN;

//   let Y = 0;
//   let X = 0;
//   let score = 0;
//   for (let i = 0; i < operation.length; i++) {
//     const [dY, dX] = DIR[operation[i]];
//     Y += dY;
//     X += dX;
//     if (isValid(Y, X) === false) return 'OUT';
//     score += board[Y][X];
//   }
//   return score;
// };