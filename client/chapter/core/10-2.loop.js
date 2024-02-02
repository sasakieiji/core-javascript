/* -------------------- */
/* Do While Loop        */
/* -------------------- */

let i = 0;

do {
  console.log(i);
  i++;
} while (false);
console.log(i); // 1

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력

let repeat = +prompt('순환횟수', 0);
do {
  console.log(repeat);
} while (repeat--);


//선택한 대상의 다음 요소를 선택하기 위한 코드

let first = document.querySelector('.first');
//querySelector -> 괄호안의 값에 해당하는 요소가 어떤 좋류인지 알수 있음

do{

  first = first.nextSibling;

}while(first.nodeType !== document.ELEMENT_NODE) //nodeType의 값이 문서의 element인지 구분하는 조건
//nodeType -> 요소에 따라 정해진 숫자값을 반환해줌 

console.log( first );

//선택한 대상의 다음 요소를 선택하기 위한 코드
function next(node){
    do{
        node = node.nextSibling;
    }while(node.nodeType !== 1)
    return node;
}

cosnt second = next(first);

console.log(second);

//선택한 대상의 이전 요소를 선택하기 위한 코드
function prev(node){
    
    
    if(typeof node === 'string'){
        node = document.querySelector(node);
      }

    do{
        node = node.previusSibling;
    }while(node.nodeType !== 1)
    return node;
}




//nextSibling ->
//nextElementSibling ->


// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

let repeat = +prompt('순환횟수', 0);
do {
  console.log(repeat);

  if (repeat < 0) {
    alert(
      '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
    );
  }
} while (repeat--);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정
