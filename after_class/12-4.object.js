/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
    date: '2023. 12. 06',
    tableIndex: 5,
    menu: [
      { name: '통 새우 돈까스', price: 13000, count: 2 },
      { name: '치즈 돈까스', price: 10000, count: 1 },
    ],
  };

  /*
  ⛰️매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.

  🚩객체에서 금액과 갯수를 조회해서 계산해주면 되지않을까

  ✨1.대괄호 표기법을 이용해 필요한값을 객체에서 얻고 얻은 값을 계산하여 결과에 대입하면 되지 않을까
    1.shopOrder['menu'][0]['price'],shopOrder['menu'][0]['count'], shopOrder['menu'][1]['price'], shopOrder['menu'][1]['count']

  ✨2.menu배열의 모든 price와 count에 대해 같은 연산을 반복 실행해야하기에 반복문을 활용하여 총합을 구해준다

  반복해야하는 상황일 경우 사용할수 있는 매서드를 활용

  ✨3.reduce를 활용하는 방법
    🪄arr.reduce(callback[, initialValue])
    배열의 각 요소에 대해 주어진 함수를 실행하고, 하나의 결과값을 반환합니다.

  ✨4.forEach를 활용하는 방법
    🪄forEach(callbackFn) forEach(callbackFn, thisArg)
    각 배열 요소에 대해 제공된 함수를 한 번씩 실행합니다.

  함수를 이용해서 총합을 구하는 방법에는 두가지가 있다 생각 되었다.
    1. 외부에서 함수를 선언해서 사용하는경우
    -> 모든 객체가 사용가능
    2. 객체내부에 함수를 작성해서 매서드로 사용하는 경우
    -> 함수를 가지고 있는 해당 객체만 사용가능

    //2-1  
    function totalPrice(target){
      
      let total = 0;

      for(i=0; i<target['menu'].length; i++){
        total += target['menu'][i]['price'] * target['menu'][i]['count'];
      }

      return total;

    };

    //3

    
    ❓자바스크립트에서 for문은 반환값이 없는데 외부변수를 선언해서 for문을 실행하면 for문을 실행한 값이 외부변수에 저장(참조)되는 이유

    외부 변수를 for문에서 참조해서 사용했기 때문
    ->참조복사의 개념으로 이해하면 되는걸까?
        1. for문 내부에 total이라는 변수가 없기에 for문 밖에 total이 있는지 찾아보게됨
        2. total을 찾게 되면 for문에 total의 값이 참조 복사되며 선언됨
        3. for연산을 마치면 for문안에 참조복사된 total값은 제거되됨 
        외부에 선언된 total은 for문안에서의 total과 참조되어 있었기 때문에 외부에 선언된 total의 값이 for문을 실행한 값이 되는 것 
    
    영상정리후 개인의 생각정리후 궁금증정리
    여기까지 이해함 이부분에서 막혔다 여기에대해 답을달라

    질문을 하는 이유 -> return값을 따로 쓰지 않아도 for문의 결과가 total에 반영 되어 헷갈렸기 때문 복제가 되서 쓰인다면 for문이 끝나도 해당 결과가 total에 반영되지 않음 만약 참조가 아니라면 total의 값을 받기위해 for문 안으로 들어 간것이 된다.
    
    ->

    ->할당과 재할당 //📚클로저, 지역변수, 스코프, 실행환경에 대한 공부필요
    
    
    //2-2
    const shopOrder = {
      date: '2023. 12. 06',
      tableIndex: 5,
      menu: [
        { name: '통 새우 돈까스', price: 13000, count: 2 },
        { name: '치즈 돈까스', price: 10000, count: 1 },
      ],
      totalPrice(){
        let total = 0;
        for(i=0; i<this['menu'].length; i++){
          total += this['menu'][i]['price'] * this['menu'][i]['count'];
        }
        return total;
      }
    };


    ❓여기서 total값에 this.을 붙여준 이유가 궁금함 
    const shopOrder = {
      total:0,
      date: '2023. 12. 06',
      tableIndex: 5,
      menu: [
        { name: '통 새우 돈까스', price: 13000, count: 2 },
        { name: '치즈 돈까스', price: 10000, count: 1 },
        { name: '곰곰 육개장', price: 15000, count: 3 },
      ],
      totalPrice(){
        this.total = this.menu.reduce((acc,cur)=> acc + (cur.price * cur.count),0)
        return this.total
      }
    };

    ->this 자신의 객체값을 참조해서 쓰고 싶을때 매서드자체가 shopOrder의 total값에 적용하기 위한 것이기에 


  // 메서드와 this 
  // ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
  // ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
  //   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
  //   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
  //   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만, 
  //   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.
  
  
  // 메서드 단축 구문
  concise 방법활용
  단축구문 -> 생성자 기능이 없는 것임
  
  
  // 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this
  
  const navigationMenu = {
    name: '글로벌 내비게이션',
    items: [
      { id: 'link-g', text: 'Google', link: 'https://google.com' },
      { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
    ],
    getItem(index) {
      return this.items[index];
    },
    addItem: (newItem) => {
      this.items.push(newItem);
    },
  };