/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
    position: 'fixed',
    ['z-index']: 10000,
    top: '50%,'
    left: '50%',
    width: '60vw',
    ['max-width']: 800,
    height: '40vh',
    ['min-height']: 280,
    transform: 'translate(-50%, -50%)'
}



// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
    name: null,
    ['e-mail']: null,
    isLogIn: null,
    permission: null
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.name);
authUser.name = 'tiger';
console.log(authUser.name);
// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 (프로퍼티 값을 바꿔라)

authUser.permission = 'paid User Rightss';
console.log(authUser.permission);
authUser['permission'] = 'paid User Rights';
console.log(authUser['permission']);

authUser['permission'] = 'paind User Rights';

//📚시간나면 해볼것 
/*객체의 프로퍼티 이름을 바꾸는 법
✨매서드를 활용하는 방법
✨삭제하여 재선언하는 방법
✨프로퍼티키를 변경하는 방법
    1. 객체의 프로퍼티 키에 접근가능하도록 데이터를 변환
    2. 프로퍼티 키의 값을 수정
    3. 원래 객체로 변환후 반환
*/

// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['paind User Rights']);

//계산된 프로퍼티 (computed property) -> 대괄호 표기법을 활용하면 변수키값으로 변수를 활용할수 있다.
let calculateProperty = 'phone'; // phone | tel

authUser[calculateProperty] = 'tel';






//⛰️프로퍼티 포함 여부 확인

/*포함여부확인 구현방법
    case01 
    🚩특정 프로퍼티키를 가지는 객체가 있는지 조회한 결과값을 활용

    ✨1. 점표기법과 대괄호 표기법을 활용하여 객체에 존재하지 않는 프로퍼티키를 조회시 undefined라는 값 반환한다는 점을 이용
    객체중 undefined라는 값을 가진 객체가 존재할수 있음
    -> X 

    ✨2. in 연산자를 활용(상위요소까지 조회하기에 객체가 가지고 있는 프로퍼티인지 판별하는 단계가 필요함)
    🪄in연산자 
    'propertyKey' in obj
    ->프로퍼티 키가 객체안에 존재하면 true를 반환
    🪄hasOwnProperty()


        1. in연산자를 통해 프로퍼티키를 조회
        2. true여부 확인

    case02 
    객체안에 프로퍼티가 있는지 확인

    🚩프로퍼티는 밸류값만 존재하는 경우는 없다
    ->프로퍼티키의 유무로 프로퍼티의 포함 여부를 알수 있지않을까?

    ✨1. for...in을 활용할것(상위요소까지 조회하기에 객체가 가지고 있는 프로퍼티인지 판별하는 단계가 필요함)
    🪄for...in
    -> 

    ❓왜 객체의 프로퍼티(프로퍼티키:프로퍼티 밸류)가 아닌 프로퍼티의 키값만 result배열에 추가 되는가? 
    
    for(let key in obj)의 정확한 해석이 궁금
    -> 객체안에있는 프로퍼티를 변수 key라고 선언한것과 같은 의미를 가진다고 생각되는데 이때 왜 프로퍼티키만 result배열에 추가 되는지
    -> for의 조건선언부에 in연산자가 불린값을 제공하여 반복여부를 제공하는데 사용되는지 

    for...in 객체를 순환하며 키값을 key에 넣어주는 동작을 수행함 (for반복과 in연산과 상관없음)


    📚여기서 in과같은 기능을 하는 함수를 구현해 보는것도 좋을거 같음

    ✨2. Object.keys()매서드를 활용
    🪄Object.keys()
    ->객체의 프로퍼티 키만 배열로 반환해줌
        
        1.객체에 Object.keys()매서드를 이용하여 키를 배열로 반환
        2.배열의 length값이 0인지 비교하여 빈객체인지 확인
*/

//case01 - 2
'propertyKey' in obj;

let a = {name: 'ray'};
'name' in a; //true 반환

/*
in은 상속된것까지 조회하기에...
hasOwnProperty매서드를 활용하여 프로퍼티가 상속되지 않은 실제 객체가 가지는 프로퍼티인지 구분
*/

function a(){

  if(Object.prototype.hasOwnProperty.call(a,'name')){
    return true;
  }else{
    return false;
}

}
//❓return문 작성시 지켜야할것들
//return 함수안에서만 사용가능


//삼항식으로 줄여볼까?
(Object.prototype.hasOwnProperty.call(a,'name')) ? 'name' in a : false

//case02 -2
function hasProperty(obj){
    const keyList = Object.keys(obj)
    if(keyList.length === 0){
        return `${obj} is empty`;
    }else{
        return `${obj} has property`;
    }
}

//❓'[object Object] has property'로 출력되는이유?
//객체에 name프로퍼티추가후 조회해서 구현

 //{}안의 코드가 한줄이네 -> 삼항식으로 줄여볼까?
function hasProperty(obj){
    const keyList = Object.keys(obj)
    return (keyList.length === 0) ? `${obj} is empty` : `${obj} has property`
}

//❓예외케이스가 있을까요?
//잘짜여짐 





// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */






/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */




/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap;


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser;


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */






/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */




