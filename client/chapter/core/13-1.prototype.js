/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

//객체 중심 프로그래밍

//동물 -> 호랑이 -> 어떤 호랑이 

const animal = {
    legs:4,
    tail:true,
    stomach:[],
    prey: null,
    getEat(){
        return this.stomach
    },
    setEat(food){
        this.prey = food; //this객체에 prey: food 프로퍼티가 추가됨
        this.stomach.push(food) //stomach배열에 food값이 추가됨
    }
}

const animal = {
    legs: 4,
    tail: true,
    stomach: [],
    prey: '',
    get eat(){
        return this.stomach
    },
    set eat(food){
        this.prey = food; //this객체에 prey: food 프로퍼티가 추가됨
        this.stomach = [food] //stomach배열에 food값이 추가됨
    }
}

const tiger = {
    pattern: '호랑이무늬',
    hunt(target){
      this.prey = target;
      return `${target}에게 조용히 접근합니다.`
    },
    __proto__: animal
  }

const 백두산호랑이 = {
    color: 'white',
    name: '백랑이',
    __proto__: tiger
}

const 용마산호랑이 = {
    color: 'greenyellow',
    name: '선돌이',
    __proto__: tiger
}

용마산호랑이.eat = '사과';
/*
용마산 호랑이가 eat을통해 prey가 수정되면 prey라는 프로퍼티는 없기때문에 객체에 새로 추가된다
하지만 stomach의 값이 수정되었을때에는 prototype으로 공유하고 있는 stomach값이 수정되기에 다른 상속되는 객체들도 영향을 받게 된다.



프로토타입 체이닝 -> 객체안에 없으면 상속해준 상위요소에서 메서드 여부를 조회
동작원리 -> https://poiemaweb.com/js-prototype



*/

/*
생성자함수 -> 컴포넌트
생성자 함수를 통해 만들어진 객체 -> 인스턴스


/*
get과 set을 이용하여 함수를 만들었을때 

이와같은 식의 형태는 
animal.eat ->getter의 역할을 함
animal.eat = value ->setter의 역할을함 

함수를 만들때 쓰이는 get과 set은 getter,setter라고 부름
*/






// 생성자 함수 

function Animal(){
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
    
    this.getEat = function (){
        return this.stomach
    }
    this.setEat = function(){
        this.prey = food;
        this.stomach.push(food)
    }

}

const a = new Animal();

function Tiger(name){
    this.name = name;
    this.pattern = '호랑이무늬'
    this.hunt = function(target){
        this.prey = target
        return `${target}에게 천천히 접근한다.`
    }
}

Tiger.prototype = a;

const 한라산호랑이 = new Tiger('한돌이');

//call, apply, bind 함수의 메서드
//this를 전달해줄 수 있음 

function sum(a,b){
    return a+b
}

sum.call(1,2)

/*
call, apply -> 바로실행
bind -> 바로실행 X

call -> 해당함수가 참조하는 this를 정해줄수 있음 
apply -> 인수를 배열로 전달해줌 
bind -> this를 바꾼함수를 반환해줌

this를 바꿈으로서 바꾼함수의 매서드를 쓸수 있게됨
*/