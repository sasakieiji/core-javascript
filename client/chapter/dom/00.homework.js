/*
dom에 있는걸 자바스크립트로 가져오는 방법
//querySelector
*/

const idField = document.querySelector('#idField');

//버튼의 기본 제출 동작을 차단 하는법
const submit = document.querySelector('btn');

/*
어떤 동작을 했을때 실행해라
//eventListener
*/

function handleCheckId(){
    
    if(this.value === 'hello'){
        console.log('success');
        idField.classList.remove('is-active');//클래스 삭제(잘못입력되었을때 계속 빨간색 구현 삭제)
    }else{
        console.log('error!');
        idField.classList.add('is-active'); //클래스 추가(잘못입력되었을때 계속 빨간색 구현)
    }

}

//버튼의 기본 동작을 차단하는 방법

function handleSubmit(e){

    e.preventDefault();
    console.log('제출!!');

}


//input.value -> 인풋에 입력되는 값을 수집함
//console.log(this.value); 로 확인해볼것

idField.addEventListener('input',handleCheckId)
submit.addEventListener('click',handleSubmit)

//classList

//preventDefault







// querySelector

const idField = document.querySelector('#idField');
const submit = document.querySelector('.btn');


// eventListener 

function handleCheckId(){

  if(this.value === 'hello'){
    console.log('success');
    idField.classList.remove('is-active');

  }else{
    console.log('error!');
    idField.classList.add('is-active');
  }
}


function handleSubmit(e){
  
  e.preventDefault(); //e.preventDefault()는 브라우저가 적용하는 기본 동작을 방지하는 역할을 합니다. 기본 동작은 이벤트의 종류에 따라 다릅니다. 예를 들어, submit인 경우 form 데이터를 서버에 전송하고, 페이지를 새로 고침 하는 부분이 기본 동작입니다. 



  console.log('제출!!');
}

//idField에 input이벤트가 발생하면 handlecheckId를 실행해라
idField.addEventListener('input',handleCheckId)
submit.addEventListener('click',handleSubmit)

// classList



// preventDefault


//다른 페이지로 이동하는 매서드
window.location.href = 주소;