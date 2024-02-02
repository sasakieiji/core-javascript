/* ----------------------- */
/* Number Type             */
/* ----------------------- */


// 1억 (million)
// 0의 갯수가 많아 금액을 쉽게 파악하기 어렵습니다.
let riches = 100000000;

// 1,000 단위 구분하듯 사용할 수 있을까요?
riches = 100_000_000;

// 숫자 옆에 `e`를 붙여 0의 갯수를 설정할 수 있습니다.
riches = 1e8;


// 그렇다면 아래 작성된 숫자 값은 얼마일까요?
riches = 1.45e6; // → 1.45 * 10 ** 6


// 작은 수도 `e`를 사용해 표현할 수 있습니다.
riches = 1e-6; // → 1 / 10 ** 6


/* 어림수 ---------------------------------------------------------------- */

let number = 90_127.53100032;

// 내림
let floor;

// 반올림
let round;

// 올림
let ceil;

// 절삭(소수점 이하)
let truncate;

// 난수
let random;

// 여러 수 중, 최댓값
let max;

// 여러 수 중, 최솟값
let min;

// 거듭제곱
let pow;

// 최소, 최대 값 사이 난수 반환 함수
let getRandomMinMax;

/*
1.매개변수를 받는다
2.number.randow을 통해 난수를 받는다 (0~1)
3.숫자를 곱해주어 갯수의 범위를 정해준다 
4.숫자를 더하여 최솟값과 같게 만들어 준다.
5.소수점 이하의 값을 매서드를 통해 제거 해준다.
*/

//JSDoc

//함수 선언문
function randomNum(min, max){
    if(min > max) throw new Error('최솟값은 최댓값보다 작아야합니다');
    return Math.round(Math.random() * (max - min) + min)
}

//함수 표현식
let randomNum = function(min, max){
    if(min > max) throw new Error('최솟값은 최댓값보다 작아야합니다');
    return Math.round(Math.random() * (max - min) + min)
}

randomNum(3,5)

randomNum = function(min, max){
    if(min < max) throw new Error('최솟값은 최댓값보다 작아야합니다');
    return Math.round(Math.random() * (max - min) + min)
}

randomNum(3,5)

/*

-> 함수 선언문 -> 호이스팅
-> 함수 표현식 -> 재할당으로 동적으로 바꿀수 있음

서로 바꿀수 있으면 된다. 그냥 두가지 방법 다 구현하자.

*/

/* 진법 ------------------------------------------------------------------ */

// 16진수 0x
//  8진수 0o
//  2진수 0b

// parseInt(string, base) → 진수 2 <= base <= 36
// number.toString(base) → base 진수 변환 후 문자 값 반환


/* 컬러 변환 -------------------------------------------------------------- */

const colorChip = {
  red: 207,
  green: 102,
  blue: 13,
};

// colorChip의 red, green, blue 값을 변환해봅니다.

// 1. 10진수 → 16진수 변환하기

// 2. 16진수 → 10진수 변환하기