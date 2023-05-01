# Event
- HTML 요소에서 발생하는 모든 상황을 의미

## Event object
- 네트워크 활동이나 사용자와의 상호작용 같은 사건의 발생을 알리기 위한 객체
- 이벤트가 발생했을 때 생성되는 객체
- DOM 요소는 Event를 받고 ("수신")
- 받은 Event를 "처리"할 수 있음
  - Event 처리는 주로 addEventListener() 메서드를 통해 Event 처리기(Event handler)를 다양한 html 요소에 "부착"해서 처리함

## Event handler
- 특별한 함수가 아닌 일반적인 JavaScript Function을 정의하여 사용
- 웹 페이지에서 발생하는 Event에 대해 반응하여 동작하는 함수를 지칭
- Event handler 함수는 이벤트가 발생했을 때 호출되며, Event 객체를 매개 변수로 전달 받음

### Event handler - addEventListener()
- EventTarget.addEventListener(type, handler function)
  - EventTarget = 대상
    - Event를 지원하는 모든 객체(Element, Document, Window 등)을 대상(EventTarget)으로 지정 가능
  - type = 특정 Event
    - 반응 할 Event 유형을 나타내는 대소문자 구분 문자열
    - input, click, submit ...
  - handler function = 할 일
    - 지정된 타입의 Event를 수신할 객체
    - JavaScript function 객체(콜백 함수)여야 함
    - 콜백 함수는 발생한 Event의 데이터를 가진 Event 객체를 유일한 매개변수로 받음
  - 지정한 Event가 대상에 전달될 때마다 호출할 함수를 설정

# Event 전파와 취소
- DOM 요소에서 발생한 이벤트가 상위 노드에서 하위 노드 혹은, 하위 노드에서 상위 노드로 전파되는 현상을 의미
- addEventListner 메서드를 사용하여 전파 방식을 제어할 수 있음
- 기본 값은 하위 노드에서 상위 노드로 전파되는 방식을 사용 => Event Bubbling

### event.preventDefault()
- 현재 Event의 기본 동작을 중단
- HTML 요소의 기본 동작을 작동하지 않게 막음
- HTML 요소의 기본 동작 예시
  - a 태그 : 클릭 시 특정 주소로 이동
  - form 태그 : form 데이터 전송

## lodash
- 모듈성, 성능 및 추가 기능을 제공하는 JavaScript 유틸리티 라이브러리
- array, object 등 자료구조를 다룰 때 사용하는 유용하고 간편한 유틸리티 함수들을 제공
- 함수 예시
  - reverse, sortBy, range, random ...

## this와 addEventListener
- addEventListener에서의 콜백 함수는 특별하게 function 키워드의 경우 addEventListener를 호출한 대상을(event.target) 뜻함
- 반면 화살표 함수의 경우 상위 스코프를 지칭하기 때문에 window 객체가 바인딩 됨
- addEventListener의 콜백 함수는 function 키워드를 사용하기

