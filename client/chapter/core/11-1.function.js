
function getStyle(node.prop){

    //validation 확인 작업 -> 협업시 유용

    if(typeof node === 'string'){
        node = document.querySelector(node);
    }

    if(typeof prop !== "string"){
        throw new Error('getStyle 함수의 두번째 인자는 문자 타입 이여야 합니다.')
    }



    return getComputedStyle(node)[prop]
}

const first = document.querySelector('.first');
const size = getStyle(first,'fontSize');
console.log(size);

//요소, 프로퍼티, 수정값을 인자로 넣어주면 반영 되게 하는 함수
//node.style.color = 수정값;

//대괄호 표기법 node.style.property = value일때 property의 값이 문자열인경우 대괄효 표기법으로 표기해야 정상 작동함
//매서드 사용시 문자열을 사용해야하는 경우 대괄호 표기법 활용

function setStyle(node, property, value){

    node  = document.querySelector(node);

    return node.style[ property ] = value;
}

function setStyle(node,prop,value){

    if(typeof node === 'string') node = document.querySelector(node);
  
    if(typeof prop !== 'string'){
      throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    }
  
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.');
  
    node.style[prop] = value
  }


function css(node, prop, value){
    
    if(!value){
        return getStyle(node, prop)
    }else{
        setStyle(node, prop, value);
    }

    
}

function css(node, prop, value){
    if(!value){
        return getStyle(node, prop)
    }
    setStyle(node, prop, value); 
}

최적화

function css(node, prop, value){
    return !value ? getStyle(node,prop) : setStyle(node, prop, value)
}


/*작은 기능을 가지는 함수를 만듦
이를 이용하는 유틸 함수를 만들어 이용*/



