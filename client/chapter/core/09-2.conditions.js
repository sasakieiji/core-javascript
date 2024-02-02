let abc = prompt('지금 몇시야?');

switch (abc) {
  case '아침':
    alert('뉴스 기사 글을 읽는다.');
    break;

  case '점심':
    alert('자주 가는 식당에 가서 식사를 한다.');
    break;

  case '저녁':
    alert('동네 한바퀴를 조깅한다.');
    break;

  case '밤':
    alert('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case '심야':
  case '새벽':
    alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

if (abc === '아침') {
  alert('뉴스 기사 글을 읽는다.');
} else if (abc === '점심') {
  alert('자주 가는 식당에 가서 식사를 한다.');
} else if (abc === '저녁') {
  alert('동네 한바퀴를 조깅한다.');
} else if (abc === '밤') {
  alert('친구에게 전화를 걸어 수다를 떤다.');
} else if (abc === '심야' || abc === '새벽') {
  alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

let num = prompt('0~6의 숫자중 하나를 입력해주세요');

switch (num) {
  case '0':
    alert('일');
    break;

  case '1':
    alert('월');
    break;

  case '2':
    alert('화');
    break;

  case '3':
    alert('수');
    break;

  case '4':
    alert('목');
    break;

  case '5':
    alert('금');
    break;

  case '6':
    alert('토');
    break;

  default:
    alert('0~6사이의 숫자를 입력해주세요');
    break;
}

function getRandom() {
  return Math.floor(Math.random() * 7);
}

/* 범위가 정해져 있어 재사용하는데 제약이 있음
이때 매개변수를 사용 */

//함수를 쓰는 이유 : 코드의 재사용성을 높이기 위해 => 매개변수의 활용
//관심사의 분리 seperation of concerns
//함수는 하나의 기능만을 수행하는게 좋음

function getRandom(n) {
  return Math.floor(Math.random() * n);
}
/* 0~n-1까지의 범위의 수중 랜덤으로 제공해줌 */

function getDay(number) {
  switch (number) {
    case 0:
      console.log('일');
      break;
    case 1:
      console.log('월');
      break;
    case 2:
      console.log('화');
      break;
    case 3:
      console.log('수');
      break;
    case 4:
      console.log('목');
      break;
    case 5:
      console.log('금');
      break;
    case 6:
      console.log('토');
      break;
  }
}

getDay(getRandom());

function getDay(number) {
  switch (number) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

function weekend() {
  const today = getDay(getRandom(7));

  if (today.includes('토') || today.includes('일')) {
    return `오늘은 ${today}요일 이며 주말입니다.`;
  } else {
    return `오늘은 평일입니다.`;
  }

  return today.includes('토') || today.includes('일')
    ? '주말입니다'
    : '평일입니다';
}
