//생성자 함수를 보다 간단히 만드는 법

/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


//클래스는 매개변수를 클래스안의 constructor을 통해 받음
//constructor method는 최초 1회만 실행됨 (n회? X)

class Animal {

    constructor(name){
        this.name = name;
        this.stomach = [];
        this.legs = 4;
        this.tail =  true
    }

    get eat(){
        return this.stomach
    }

    set eat(food){
        this.prey = food;
        this.stomach.push(food);
    }

}

class Tiger extends Animal{

    constructor(){
        super() //부모의 constructor의 내용을 전부 가져와서 쓰겠다.
        this.pattern = '호랑이무늬' //추가로 정의할 프로퍼티 
    }

    static options = {
        version: '0.0.1',
        company: 'like-lion',
        ceo: '---'
    }

    static bark(){
        return '어흥!'
    }

    hunt(target){
        return `${target}에게 조심히 접근한다.`
    }

}

const 한라산호랑이 = new Tiger('한돌이');

