/* global getNode, insertLast, clearContents */

function phase1(){
    const first = getNode('#firstNumber');
    const second = getNode('#secondNumber');
    const result = getNode('.result');
    const clear = getNode('#clear');

    // 1. input value 값 가져오기
    //    - input에게 input 이벤트 걸기 
    //    - input.value 사용하기

    function clearContents(node){
        if(typeof node === 'string') node = getNode(node);

        if(node.tagName === 'INPUT' || node.tagName === 'TEXTAREA'){
            node.value = ''
            return;
        }

        node.textContent = '';
    }

    function handleInput(){
    
    const firstValue = Number(first.value);
    const secondValue = Number(second.value);

    const total = firstValue + secondValue;

    /* result.textContent = ''; */
    clearContents(result);
    insertLast(result,total);
    
    }


    function handleClear(e){
    e.preventDefault();
    clearContents(first)
    clearContents(second)
    result.textContent = '-'

    }


    first.addEventListener('input',handleInput)
    second.addEventListener('input',handleInput)
    clear.addEventListener('click',handleClear);


    // 2. 두 수의 합 더하기



    // 3. 합계 화면에 뿌리기(랜더링)
}

const calculator = getNode('calculator');
const result = getNode('.result');
const clear = getNode('#clear');
const numberInputs = Array.from(getNodes('input:not(#clear)'));

function handleInput(){
    const total = numberInputs.reduce((acc,cur)=>acc + Number(cur.value),0);

    clearContents(result);
    insertLast(result,total);
}

function handleClear(e){
    e.preventDefault;

    /* numberInputs.forEach((input)=>{
        clearContents(input);
    }) */
    //콜백함수는 이렇게 적을수 있다.
    numberInputs.forEach(clearContents);

    result.textContent = '-'
}

calculator.addEventListener('input',gandleInput);




//모듈프로그래밍