# DOM
- 문서 객체 모델 (Document Object Model)
- 문서의 구조화된 표현을 제공하여 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공
  - 문서 구조, 스타일, 내용 등을 쉽게 변경할 수 있게 도움
  - HTML 콘텐츠를 추가, 제거, 변경하고, 동적으로 페이지에 스타일을 추가하는 등 HTML/CSS를 조작할 수 있음
- HTML 문서를 구조화하여 각 요소를 객체(object)로 취급

# DOM의 기본구조

## DOM Tree
- DOM은 문서를 논리 트리로 표현
- DOM에서 모든 것은 Node
- HTML 요소, 속성, 텍스트 모든 것이 노드
- 각 노드는 부모, 자식 관계를 형성하고 이에 따라 상속 개념도 동일하게 적용됨

## Node
- DOM의 구성 요소 중 하나
- HTML 문서의 모든 요소를 나타냄
  - 각각의 HTML 요소는 DOM Node로서 특정한 노드 타입을 가짐
  - Document Node === HTML 문서 전체를 나타내는 노드
  - Element Node === HTML 요소를 나타내는 노드 ex - p 태그
  - Text Node === HTML 텍스트, Element Node 내의 텍스트 컨텐츠를 나타냄
  - Attribute Node === HTML 요소의 속성을 나타내는 노드

## DOM의 주요 객체

### window object
- DOM을 표현하는 창
- 가장 최상위 객체 (작성 시 생략 가능)
- window의 메서드 예시
  - 새 탭 열기 => window.open()
  - 경고 대화 상자 표시 => window.alert()
  - 인쇄 대화 상자 표시 => window.print()

### document object
- 브라우저가 불러온 웹 페이지
- 페이지 컨텐츠의 진입점 역할을 하여, body 태그 등과 같은 수많은 다른 요소들을 포함하고 있음
- document는 window의 속성

### Node vs Element
- head 태그, body 태그는 HTML 요소로 element
- title 태그, p 태그는 Text Node이면서 element 
- id="unique"는 DOM에서는 Attr Node이고 HTML 요소인 p 태그의 속성이므로 element는 아님

# DOM 조작

- DOM 조작 순서
  - 1. 선택 (Select)
  - 2. 조작 (Manipulation)
    - 생성, 추가, 삭제 등

## 선택 관련 메서드
- document.querySelector(selector)
  - 제공한 선택자와 일치하는 element 한 개 선택
  - 제공한 CSS selector를 만족하는 첫 번째 element 객체를 반환 (없다면 null 반환)

- document.querySelectorAll(selector)
  - 제공한 선택자와 일치하는 여러 element를 선택
  - 매칭 할 하나 이상의 셀렉터를 포함하는 유효한 CSS selector를 인자(문자열)로 받음
  - 제공한 CSS selector를 만족하는 NodeList를 반환

## NodeList
- DOM 메서드를 사용해 선택한 노드의 목록
- 배열과 유사한 구조를 가짐
- Index로만 각 항목에 접근 가능
- 배열의 forEach 메서드 및 다양한 배열 메서드 사용 가능
  - 단, 배열의 모든 메서드를 사용할 수 있는 것은 아님 ex - push(), pop()
- querySelectorAll()에 의해 반환되는 NodeList는 DOM의 변경사항을 실시간으로 반영하지 않음

## 조작 관련 메서드 
- 생성
  - document.createElement(tagName)
    - 작성한 tagName의 HTML 요소를 생성하여 반환
- 입력
  - HTMLElement.innerText
    - Node 객체와 그 자손의 텍스트 컨텐츠(DOMString)를 표현
    - 줄 바꿈을 인식하고 숨겨진 내용을 무시하는 등 최종적으로 스타일링이 적용된 모습으로 표현됨
- 추가
  - Node.appendChild()
    - 한 Node를 특정 부모 Node의 자식 NodeList중 마지막 자식으로 삽입
    - 한 번에 오직 하나의 Node만 추가할 수 있음
    - 추가된 Node 객체를 반환
    - 새롭게 생성한 Node가 아닌 이미 문서에 존재하는 Node를 다른 Node의 자식으로 삽입하는 경우 위치를 이동
- 삭제
  - Node.removeChild()
      - DOM에서 자식 Node를 제거
      - 제거된 Node를 반환

## 속성 조회 및 설정
- Element.getAttribute(attributeName)
  - 해당 요소의 지정된 값(문자열)을 반환
  - 인자 (attributeName)는 값을 얻고자 하는 속성의 이름
- Element.setAttribute(name, value)
  - 지정된 요소의 값을 설정
  - 속성이 이미 존재하면 값을 갱신, 존재하지 않으면 지정된 이름과 값으로 새 속성을 추가

## DOM 조작 정리
1. 선택한다
- querySelector()
- querySelectorAll()

2. 조작한다
- innerText()
- setAttribute()
- getAttribute()
- createElement()
- appendChild()


