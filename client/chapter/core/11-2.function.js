/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 이라 부른다.
  console.log(arguments); // 순환 시켜서, 반복시켜서 값을 다 더하기

  let total = 0;
  //for문
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
    //for of 를 활용한 방법
    for (let value of arguments) {
      total += value;
    }
    //배열의 매서드 빌려쓰기
    Array.prototype.forEach.call(argument, function (item) {
      console.log(item);
      total += item;
    });

    //arguments의 부모를 배열로 바꿔치기 한다면?
    arguments.__proto__ = Array.prototype;
    arguments.fprEach(function (item, index) {
      totla += item;
    });

    //arguments 객체(유사배열) => 진짜 배열(array)
    const arr = Array.slice.call(arguments);
    //const arr = Array.from(arguments);
    //slice를 썻을때 범위를 지정해주지 않으면 그냥 배열로 반환 만 됨

    //spread syntex
    const arr = [...arguments];

    arr.forEach(function (item) {
      total += item;
    });

    arr.forEach((item) => (total += item));

    total = arr.reduce(function(acc(누적값), cur(현재값)){
        return acc + cur
    },0(초깃값))

    return arr,reduce((acc, cur) => acc + cur)

    //배열의 매서드가 중요!! ✨ Array method ✨

    //forEach => 값을 반환하지 않음. 반복의 로직만 처리
    //reduce => 값을 반환함 모든걸다
    //map => 배열을 반환함
    arr.map(function(a){
        return a * 2 
    })
    const map = arr.map( a => a * 2)
    console.log(map);
    //filter => 배열을 반환함 

  }
  return total;
};

const result = calculateTotal(10, 20, 30);

console.log(result);

const tag = data.map



const data = [
    {
      name:'tiger',
      age:30,
    },
    {
      name:'kindtiger',
      age:20,
    },
    {
      name:'seonbeom',
      age:41,
    }
  ]

//html에 추가하여 페이지상에 표현할수 있음 
  const tag = data.map((d)=>{
    return `<li> 이름 : ${d.name}</li>`
  })
  
  tag.forEach((i)=>{
    document.body.insertAdjacentHTML('beforeend',i)
  })

/*
map
이중에서 이름만 뽑아내고 싶음 
=> 데이터 가공하여 필요한 정보를 담은 배열이 필요할때
*/
const age = data.map((d) => d.age)



// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function(state, success, fail){
    console.log( success() );
};

callbackFunctionExpression(
    true, 
    function(){return '성공'}, 
    function(){return '성공'}
)

callbackFunctionExpression(
    true, 
    () => return '성공', 
    () => return '성공',
)







function movePage(url, success, fail){
    if(url.includes('www')){
        success();
    }else{
        fail();
    }

}

movePage(
    'https://www.naver.com',
    function (url){
        console.log('3초 뒤 해당 url로 넘어 갑니다.');
    },
    function (){
        console.error('잘못된 url 정보를 입력하셨습니다.');
    }
)

function (){
    console.log('3초 뒤 해당 url로 넘어 갑니다.');
}
() => {console.log('3초 뒤 해당 url로 넘어 갑니다.');}

function (){
    console.error('잘못된 url 정보를 입력하셨습니다.')
}
() => {console.error('잘못된 url 정보를 입력하셨습니다.');}






//한번 해보자!!! 화살표 함수와 삼항 연산자!
  // if(url.includes('www')){
  //   success(url)
  // }else{
  //   fail()
  // }
  
  url.includes('www') ? success(url) : fail()


// movePage(
//   'https://www.naver.com',
//   url => console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`),
//   ()=> console.error('잘못된 url 정보를 입력하셨습니다.')
// )

movePage(
  'https://www.naver.com',
  function (url){
    console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`);
    
    setTimeout(() => {
      // window.location.href = url
    }, 3000);
  },
  function (){
    console.error('잘못된 url 정보를 입력하셨습니다.');
  }
)


/*
const arrow = function(){};
const arrow = () => {};
*/




// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
