/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

const first = getNode('.first');

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인

console.log( first.hasAttribute( 'id' ) );

// - elementNode.getAttribute(name) – 속성값을 가져옴

console.log( first.hasAttribute('say'));

// - elementNode.setAttribute(name, value) – 속성값을 변경함

first.setAttribute('id', 'text');


// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

//setter
fist.dataset.name = 'tiger'

//getter
console.log( first.dataset )



first.dataset.animation = 'paused'

if(first.dataset.animation === 'play'){
    ///...
}




console.clear()


//node의 prop의 값을 가져 오겠다
function getAttr(node, prop){
    
    //인수로 getNode한것과 문자열 들어왔을때 구분해서 getNode가 실행됨
    if(typeof node === 'string'){
        node = getNode(node)
    }

    if(typeof prop !== 'string'){
        throw new Error('getAttr 함수의 두 번재 인수는 문자 타입 이어야 합니다.')
    }
    
    return node.getAttribute(prop)

}

function setAttr(node,prop,value){

    if(typeof node === 'string'){
        node = getNode(node);
    }

    if(typeof prop !== 'string' || typeof value !== 'string'){
        throw new Error('setAttr 함수의 두 번째, 세 번째 인수는 문자 타입 이어야 합니다.')
    }

    if(!value){
        throw new Error('setAttr함수의 세 번째 인수는 필수 입력값 입니다.')
    }

    node.setAttribute(prop,value);
}


getAttr('.first', 'id')

setAttr('.first', 'class', 'active');


//세번째 인수 유무에 따라 setter가 되거나 getter가 되는함수를 만들어 보자
function attr(node, prop, value){

    if(typeof node === 'string'){
        node = document.querySelector(node);
    }
    if(typeof prop !== 'string' || typeof value !== 'string'){
        throw new Error('setAttr 함수의 두 번째, 세 번째 인수는 문자 타입 이어야 합니다.')
    }

    if(!value){
        node.getAttribute(prop)
    }else{
        node.setAttribute(prop, value)
    }

}

attr(node, prop, value)