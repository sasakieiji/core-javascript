/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
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
  ["z-index"]: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  ["max-width"]:800,
  height: '40vh',
  ["min-height"]:280,
  transform:'translate(-50%,-50%)'
};



const template = /* html */`
  <nav>
    <ul class="menuList">
      <li>menu01</li>
      <li>menu02</li>
      <li>menu03</li>
      <li>menu04</li>
    </ul>
  </nav>
`



// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
        //  authorization
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한


let authUser = {
  uuid: crypto.randomUUID(),
  name:'tiger',
  email:'seonbeom2@gmail.com',
  isSignIn:false,
  permission: 'paid' // paid | free
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.


// getter
console.log( authUser.uuid );
console.log( authUser.name );
console.log( authUser.email );
console.log( authUser.isSignIn );

// setter
console.log( authUser.permission = 'free' );


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

//  getter 
console.log( authUser['name'] );
console.log( authUser['uuid'] );
console.log( authUser['email'] );
console.log( authUser['permission'] );

// setter
console.log( authUser['isSignIn'] = true );



// 해당 객체에 키값의 여부를 확인하는 방법 => in 



// console.log( 'name' in authUser );


for(let key in authUser){
    if(!Object.prototype.hasOwnProperty.call(authUser,key)){
    console.log(key);
    }
}

// 객체의 key만을 모아놓은 배열

const keyList = Object.keys(authUser);
console.log(keyList);

function keys(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            result.push(key);
        }
    }
}


// 객체의 value만을 모아놓은 배열 

const valueList = Object.values(authUser);
console.log(valueList);

function keys(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            result.push(obj[key]);
        }
    }
}

//객체의 key롸 value의 쌍을 배열로

const keyValue = Object.entries(authUser);
console.log(keyValue);

function keys(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            result.push([key, obj[key]]);
        }
    }
}

//프로퍼티 제거(remove 비워두기) or 삭제(delete 없애버리기)

function removeProperty(obj, key){
    
    if(isObject(obj)){
        obj[key] = null;
    }

}

function deleteProperty(obj,key){
  
    if(!isObject(obj)) return;
    delete obj[key]

}

//데이터 타입을 체크하는 방법은 typeof -> 허술함
//정교하게 타입을 체크하는 방법 -> toString을 활용
//Object.prototype.toString.call({})
//결과값중 필요한 값만 사용할수 있도록 가공 -> slice()와 toLowerCase를 활용
//Object.prototype.toString.call({}).slice().toLowerCase

function isObject(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object'
  }

//bject 말고 다른 타입도 검사하는 함수도 필요하다면 
//isObject(), isNumber() 이렇게 여러개를 만드는게 나은가요?
//isObject 함수에서 === 'object' 이부분을 떼고 범용적으로 쓰는게 나은가요?
//나중에 다루겠지만 두 방법 모두 활용할 예정 

//계산된 프로퍼티 (computed property)
let calculateProperty = 'phone';

function createUser(name, age, phone){
    
    return {
        name: name,
        age: age,
        [calculateProperty]:phone
    }
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
    name: name,
    email: email,
    authorization:authorization,
    isLogin:isLogin
}

const student = {
    name,
    email,
    authorization,
    isLogin
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

//  순서는 바꿀 수 없음. 변수 이름은 바꿀 수 있다.
const [a1,_,...rest] = [10,100,1000,10000]

// console.log( rest );

  // [[key,value],[key,value]]

// for(let [key,value] of Object.entries(authUser)){
//   console.log(key,value);
// }

// let a1 = arr[0];
// let a2 = arr[1];
// let a3 = arr[2];
// let a4 = arr[3];


const first = document.querySelector('.first');
const second = document.querySelector('.second');

const [firstElem,secondElem] = document.querySelectorAll('span');


// let [varibleA,varialbeB] = array;




/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */


// 순서 상관 x  변수 이름을 바꿀 수 있습니다.
// 기본값을 지정할 수 있습니다.

// 일급x 월급o 
const salaries = {
  박지성: 800,
  김보미: 150,
  이경민: 250,
  전희선: 50,
}


const {김보미:_김 = 100,전희선:전,박지성:박,이경민:이,도가현:도 = 20} = salaries;

const 김 = 'ㅁㅁ';

console.log( 도 );



// 1. 함수의 인수가(arguments) 엄청 많아질 경우 객체를 받아 처리할 수 있다.
// e.g) createUserList('seonbeom',30,'서울시 중랑구','010-2222-222')

createUserList(
  {
    name:'tiger',
    age:35,
    address:'서울시 중랑구 면목동',
    phone:'010-2222-2222'
  }
)


const defaultOptions = {
  name:'',
  age: 0,
  address:'',
  phone:''
}


function createUserList(options){

  // mixin 
  // const mix = {...defaultOptions,...options};

  // 2. 함수 안에서 객체를 구조 분해할 수 있다.     // default parameter
  //obj.option.name의 형태로 .option을 계속 붙여줘야하는게 귀찮기에 함수 안에서 구조 분해 해줌
  const {name:n,age,address,phone,nickName = 'tiger'} = options;

  // 3. 스코프 안에 동일한 변수가 사용될 경우 alias를 지정할 수 있다.
  const name = '선범'

  // 4. shorthand property
  return {
    name,
    age,
    address,
    phone,
    nickName
  }
}


// 5. 어차피 들어오는게 객체라면 바로 구조 분해 할당 할 수 있지 않을까?
function createUserList2({name:n,age,address,phone,nickName = 'tiger'}){


  const name = '선범'

  return {
    name:n,
    age,
    address,
    phone,
    nickName
  }
}

//1. 함수의 인수가(arguments) 엄청 많아질경우 객체를 받아 처리할수 있다

//2. 험슈 안에서 객체를 구조 분해할수 있다

//3. 스코프 안에 동일한 변수가 사용된 경우  alias를 지정할 수 있다

//4. shorthand property를 사용해서 생략해서 표현이 가능하다

//5.어차피 들어오는게 객체라면 바로 구조 분해 할당 할 수 있지 않을까?

//구조분해시 객체 선언과 헷갈리지 않게 주의!!