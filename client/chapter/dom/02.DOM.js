/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest


//first 클래스를 가지는 요소를 가져오기
const first = document.querySelector('.first');
const spanList = document.querySelectorAll( 'span' );

/* const h2 = document.querySelector( 'h2' )

const first = h2.querySelector('.first');
->const h2First = h2.querySelector('h2.first');
 */

//first 클래스를 가지는 요소를 가져오는 유틸 함수 만들기
function getNode(node,context = document){
    //typeguard 
    if(typeof node !== 'string'){
      throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다.');
    }
    //인수가 하나일때 초깃값을 이용하여 
    if(context.nodeType !== document.DOCUMENT_NODE){
      context = document.querySelector(context);
    }
  
    return context.querySelector(node);
  }
  

//초깃값을 설정해주어 document 타입이 아닌 경우 두번째 if문을 실행하게 설계함
function getNode(node,context = document){
  if(context.nodeType !== document.DOCUMENT_NODE){
    document.querySelector(context);
  }
  return context.querySelector(node);
}

//h2에 존재하는 first 찾도록
getNode('.first','h2')

/* 문서 대상 확인 */
// - matches
//target에 seclector 가 있어?
first.matches('span') 

// - contains
//
//h1태크 안에 .second라는 자식이 있어?
getNode('h1').contains(getNode('.second'))



function getNodes(node, context = document){
  
  if(typeof node !== 'string'){
    throw new Error('인수는 문자형이려야 합니다.')
  }
  if(context.nodeType !== document.DOCUMENT_NODE){
    context = document.querySelector(context);
  }
  return context.querySelectorAll(node);
}

//❓matches, contain의 차이가 무엇인지?

const spanList = getNode('span');

for(let item of spanList){
  if(item.matches('.first')){
    console.log(item);
  }
}


function getNode(node,context = document){

  if(typeof node !== 'string'){
    throw new Error('첫번째 인수는 문자형이여야 합니다');
  }

  if(context.nodeType !== document.DOCUMENT_NODE){
    context = document.querySelector(context);
  }

  return document.querySelector(node);
}

//closest 가장 가까운 조상 요소를 찾는것
//자기 자신이면 자기 자신이 우선순위 

