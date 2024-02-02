/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

//⛰️함수 표현식과 함수 선언문 두가지 경우를 모두 작성해보자

const isArray = data => Array.isArray(data);

funstion isArray2 (data){
    return Array.isArray(data)
}

const people = [
    {
      id:0,
      name: '박가희',
      age: 25,
      job: '명탐정코난 범인',
      imageSrc:'FAkq31'
    },
    {
      id:1,
      name: '김보미',
      age:64,
      job: '짜요짜요 마케터',
      imageSrc:'Gakz34'
    },
    {
      id:2,
      name: '한태희',
      age:13,
      job: '삐돌이',
      imageSrc: 'Fkzoq81'
    },
    {
      id:3,
      name: '이원명',
      age: 81,
      job: '이도령',
      imageSrc:'Tq9z1i'
    }
  ]



/* 요소 순환 ---------------------------- */

// forEach -> 값을 반환하지 X


people.forEach((item, index)=>{
    console.log(item.name)
})

let nameArray = [];
people.forEach((item.name)=>{
    nameArray.push(item.name)
}) 얕은 복사

//console.log(nameArray);



/* 원형 파괴 ----------------------------- */

//⛰️원형이 파괴되지 않는(참조되지 않는) 얕은 복사와 원형이 파괴되는 방법으로 변수에 할당하는 방법을 구현해보자

// push
// pop
// unshift
// shift
// reverse

const reverse = arr.reverse(); // 참조가 되어 있기에 원형에 값이 적용 되고 이를 원형 파괴라고 한다.

const reverse = [...arr].reverse(); // 이렇게 해주어야 얕은 복사된후 reverse가 적용된 배열이 할당됨

// splice

const splice = arr.splice(1,2,'javascript','css');

const splice = [...arr].splice(1,2,'javascript','css');

// sort ->  배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환, 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

arr.sort((a,b)=>{
    return b-a
})

/* 새로운 배열 반환 ------------------------ */
//참조 복사가 되지 않게하기 위해 했던 것들을 안해도 됨 ([...arr] 이거 안해도 된다)

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

people.map((item,index)=>{
    console.log(item.job);
})

const job = people.map((item,index)=>item.job)

const card = people.map((item,index)=>{

    return /*html*/`
        <div class="userCard">
            <span>이름 : ${item.name}</span>
            <span>나이 : ${item.age}</span>
            <span>직업 : ${item.job}</span>
        </div>
    `
})

const newAge = people.map(item => item.age + 1);

const 젋은이들 = people.filter((item)=>{

})

//css에 .userCard 클래스를 만들어서 적용되게 할수 있음

//⛰️객체를 만들고 html 태그를 추가애 화면에 띄워보고 css도 추가하여 꾸며보자 




/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight


//⛰️모든 나이의 합을 구해보자
const totalAge = people.reduce((acc,cur)=>{
    acc + cur.age
},0)

const totalAge = people.reduce((acc,cur)=>acc+cur.age, 0)

const tem = people.reduce((htmlCode,cur)=>{
    return htmlCode + `<div>${cur.name} : ${cur.age}</div>`
  },'')
  
  document.body.insertAdjacentHTML('beforeend',tem)

/* string ←→ array 변환 ------------------ */

//배열 -> 문자열, 문자열 -> 배열 로 서로 변환하게 하는 법
// split

const str = '원명 가희 소정 설아 경민 진욱'

const srtingToArray = str.splitlit(' ');
console.log(stringToArray);

// join

const arrayToString = stringToArray.join('/';)
console.log( arrayToString);

//JSON의 경우 문자열을 반환하는데 JSON.parse()을 이용하여 객체로 받아올수 있음