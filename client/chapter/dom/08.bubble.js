/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');




section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
})


article.addEventListener('click',()=>{
  console.log('%c article','color:dodgerblue');
})


p.addEventListener('click',(e)=>{

  e.stopPropagation(); // 단점 p의 이벤트 정보를 받아볼수 없음 

  console.log('%c p','color:hotpink');
})

section.addEventListener('click', (e)=>{
    console.log(e,target);
})




/* 캡처링 ----------------------------------------------------------------- */