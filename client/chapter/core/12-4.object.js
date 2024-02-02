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
  ✨1.직접 코드를 작성해 본다.
        1.객체안의 배열, 배열안의 객체의 가격을 조회
        2.조회한값을 전부 더함
  
  ✨2.forEach를 사용해서 모든 메뉴의 총금액 계산
  ✨3.reduce를 사용하여 모든 메뉴의 총금액 계산 
  ✨4.객체안에 매서드 선언


    //1
    1. 
    shopOrder['menu'][0]['price']
    2.  
    let total = 0;
    for(i=0; i<shopOrder['menu'].length; i++){
        total += (shopOrder['menu'][i]['price'] * shopOrder['menu'][i]['count']);
    }

    //2
    let total = 0;
    shopOrder.menu.forEach((product)=>{total+=product.price * product.count;})


    //3
    const result = shopOrder.menu.reduce((acc,cur)=>{
        return acc+(cur.price*cur.count)
    },0)

    reduce 초기값을 0으로 설정했을 때 안했을 때 결과가 다른데 그 이유가 뭔가요 ?
    0으로 설정하지 않으면 초깃값으로 menu의 객체를 받기 때문

    
    //4
    일반함수에서의 this : 나를 호출한 대상
    shopOrder.totalPrice() -> shopOrder에서 호출되었기에 totalPrice()가 가지는 this는 shopOrder를 가리키게 된다.
    */



  // 메서드와 this 
  // ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
  // ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
  //   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
  //   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
  //   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만, 
  //   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.
  
  
  // 메서드 단축 구문
  
  
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

  //타입스크립트를 왜 쓰는가
  //프로퍼티키값을 다르게 주면 관리 힘들어짐 이때 강제를 해줄 필요성이 있는데 이때 타입스크립트가 이걸 해줌
  navigationMenu.addItem({
    name: 'link-l',
    description: 'lycos',
    website: https://;
  })

  //객체안의 화살표 메서드 ->this는 윈도우를 가지게 된다. 
  //객체안의 함수를 설계시 this가 무엇을 참조하는지 중요해짐 