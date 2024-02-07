/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler(){
    console.log('클릭 이벤트 발생!!');
}
//()를 적으면 결과값이 전달되기에 undefined가 출력됨 따라서 ()를 제거해서 보내주어야함  잘 사용 안함
first.onclick = handler

// 3. 메서드 : element.addEventListener(event, handler[, phase])

first.addEventListener('clcick',handler);

getNode('.deleteEvent').addEventListener('click',()=>{
    first.removeEventListener('click',handler);
})


//이벤트를 추가함과 동시에 삭제함수를 변수에 할당하여 나중에 삭제 용이하도록함 
function bindEvnet(node,type,handler){
    if(typeof node === 'string'){
        node = getNode(node);
    }
    node.addEventListener(type,handler);

    return ()=>node.removeEventListener(type,handler);

}

const remove = bindEvnet('.first','click',handler)

getNode('.deleteEvent').addEventListener('click',remove);
//위에 선언된 .firstm click값이 대입되어 삭제됨 




const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall({offsetX:x, offsetY:y}){

    ball.style.transform = `translate(${x-(ball.offsetWidth / 2)}px, ${y-(ball.offsetWidth / 2 )}px)`;

}


function handleEmotion({offsetX:x, offsetY:y}){
    let template = `
        <div class="emotion" style="top: ${y}px; left: ${x}px;">🚨</div>
    `
}

ground.addEventListener('mousemove', handleEmotion);


ground.addEventListener('mousemove', () => {

})







/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener


const ground = getNode('.ground');
const ball = getNode('#ball');


function handleBall(){
    console.log('clicked!!');
}


/* ------------------------ */

//handleBall 함수에 매개변수를 설정하면 addEventListener의 이벤트 객체를 인수로 받을수 있음 
function handleBall(e){
    console.log(e.offsetX, e.offsetY);
}

//이벤트 객체에서 필요한값을 변수에 할당해줌
function handleBall(e){
    
    const x = e.offsetX;
    const y = e.offsetY;

    console.log(x, y);
}

//이벤트 객체를 분해할당해해서 이벤트 객체e에서 offsetX, offsetY 값을 x,y변수에 할당
function handleBall(e){

    const {offsetX:x, offsetY:y} = e;

    console.log(x,y);
}

//이를 함수 내부가 아닌 매개변수에 표기하여 이벤트 객체e를 받자마자 offsetX, offsetY 값을 x,y변수에 할당
function handleBall({offset:x, offsetY:y}){
    console.log(x,y);
}


// 값을 가져오기만 한것임
const {offsetX, offsetY} = e;
//값에 변수를 할당
const {offsetX:x, offsetY:y} = e;

//핸들러 함수에 매개변수가 있다면 이벤트객체를 전달해줌 


function handleBall({offset:x, offsetY:y}){
    
    console.log(x,y);

    ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`

}

/* ground.addEventListener('click',handleBall) */


function handleEmotion({offset:x, offset:y}){
    console.log(x,y);

    let template = `
        <div class='emotion' style='top:${y}px;left:${x}px'>✨</div>
    `

    insetLast(ground,template)

}

ground.addEventListener('mousemove', handleEmotion)


/* ------------------------ */

//성능을 고려하여 -> 이벤트를 내가 원하는 시점에 1번만 실행 || 원하는 시간에 맞춰 실행

//디바운스 이용 -> 쓰로틀 
//limit만큼의 시간이 지난후 콜백함수를 실행한다.
//등록, 취소 등록을하는 이유 -> 콜백함수의 실행을 막기위함 
let timeout;

function debounce(callback,limit){

    clearTimeout(timeout);

    timeout = setTimeout(()=>{
        callback()
    }, limit)

}

debounce(()=>{

},1000)




/*
//함수의 호출이 끝난뒤 1초뒤에 실행
쿠팡에서 검색시 자음하나 쓸때마다 연관검색어를 보여주지 않음
글자를 쓰고 얼마간의 시간간격을 두고 연관검색어를 보여줌 
만약 그렇지 않으면 입력 한번마다 함수를 실행하게 되어 브라우저가 느려질수 있음
*/


//❓질문
function debounce(callback,limit = 1000){

    let timeout;

    return function(e){
        clearTimeout(timeout);
    


        timeout = setTimeout(()=>{
            callback.call(this,e)
        }, limit)
    }

}

ground.addEventListener('mousemove', debounce((e)=>{
    console.log(e);
},1000))

//위와 아래는 같다

ground.addEventListener('mousemove', function(e){
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        callback.call(this.e)
    }, limit)
})


//debounce((e)=>{console.log(e);},1000) 가 실행되어 리턴된 함수가 들어있는 것과 마찬가지 .call을 활용하여 함수밖에서 이벤트 객체와 this를 사용하게 해줌 





//쓰로틀(양조절)
//마지막에 한번이 아닌 중간에 한번씩 실행해줌
//limit에 정해준 시간만큼 있다가 실행해줌
let waiting = false;

function throttle(callback,limit = 100){
    if(!waiting){
        waiting = true;
    }

    setTimeout(()=>{
        waiting = false;
    },limit);
}

throttle(()=>{},1000)

function handle(e){
    console.log(this,e);
  }
  
  // callback, closure, IIFE, call, apply
  
  function throttle(callback,limit = 100){
  
    let waiting = false;
  
    return function(e){
  
      if(!waiting){
  
        callback.call(this,e);
        waiting = true;
    
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    }
  }
  
  
  
  ground.addEventListener('mousemove',throttle((handle),1000))