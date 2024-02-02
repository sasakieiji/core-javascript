/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter = message[3];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = ;


// 부분 문자열 추출
let slice = message.slice(1);
let subString = message.substring(2,5);
let subStr = massage.substr;


// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi'); // 존재 -> 처음으로 만나게 되는 인덱스 값을 반환함  존재X -> -1을 반환함

/*
⛰️어느 브라우저를 사용하는지 알아내는 함수를 만들자
function checkBrowser(){

  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edge') > -1 : browserName = 'MS Edge'; break;
    case agent.indexOf('chrome') > -1 : browserName = 'chrome'; break;
    case agent.indexOf('safari') > -1 : browserName = 'Apple Safari'; break;
    case agent.indexOf('firefox') > -1 : browserName = 'FireFox'; break;
    case agent.indexOf('trident') > -1 : browserName = 'IE'; break;
  
  }
  
  return browserName;
}
*/

let lastIndexOf;
let includes = includes('Less');
let startsWith = startsWith('Less');
let endsWith = endsWith('more');


// 공백 잘라내기

let str = '           a   b        c           d         ';

let trimLeft = str.trimLeft();
let trimRight = ;
let trim = str.trim(); //양 끝의 공백만 제거됨

//⛰️공백을 모두 제거하는 기능을 구현하라

let reg = str.replace(/\s*/g,''); // 정규식을 이용해 모든 공백을 찾음 /\s*/g -> 모든 공백을 선택

function normalText(string){
    return string.replace(/\s*/g,'');
}

// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();

//⛰️ 텍스트 이름 변환 유틸리티 함수를 구현 해라


function toCamelCase(string) {
    return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase()) //$1정규식으로 선택했던 것들이 선택됨 
  }
  
  function toPascalCase(string) {
    let name = toCamelCase(string);
    return name[0].toUpperCase() + name.slice(1); // string[n]의 형태로 값을 재할당해주면 반영되지 않음 -> 바꿔야할 값만 가져오고 나머지 값은 잘라내어 붙여주자 
  }

/*
⛰️0001, 0002의 이름을 정해주는 유틸리티 함수를 구현해라
padStarts 활용, let name = randomnumber;
*/
