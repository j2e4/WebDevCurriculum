# Quest 03. 자바스크립트와 DOM

## Introduction
* 자바스크립트는 현재 웹 생태계의 근간인 프로그래밍 언어입니다. 이번 퀘스트에서는 자바스크립트의 기본적인 문법과, 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics
* 자바스크립트의 역사
* 기본 자바스크립트 문법
* DOM API
  * `document` 객체
  * `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  * 기타 DOM 조작을 위한 함수와 속성들
* 변수의 스코프
  * `var`, `let`, `const`

## Resources
* [자바스크립트 첫걸음](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
* [자바스크립트 구성요소](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks)
* [Just JavaScript](https://justjavascript.com/)

## Checklist
* 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?
  * 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
    - ES5: 2009년에 발표된 가장 처음의 major revision이다. 추가된 내용으로 `use strinct`, JSON 지원, `Object` 선언에 trailing comma 허용 등이 있다.
    - ES6: 2015년에 릴리즈되었다. ES2015라고도 한다. 추가된 내용은 `let`, `const` 키워드, 화살표 함수 등이 있다.
    - ES2016: 해당 버전부터 출판 연도를 이름으로 갖는다. 2016년에 릴리즈되었으며 제곱 연산자, `Array.includes()` 메소드 등이 추가되었다.
    - ES2017: `async` 함수, `Object.entries()`, `Object.values()`, `String.padStart()`, `String.padEnd()` 메소드 등이 추가됐다.

  * 자바스크립트의 표준은 어떻게 제정될까요?  
    TC39 위원회의 TC39 Process에 의해 제정된다. 확실하게 표준으로 채택된 것도 아니고 거절된 것도 아닌 제안을 통틀어 Proposal이라 칭한다.

    0. Strawman(허수아비): 아이디어를 자유롭게 제안하는 단계
    1. Proposal(제안): 챔피언이라고 부르는 TC39 위원회의 일원이 구성되어야 한다. 챔피언은 해당 제안이 다음 단계로 넘어갈 수 있게 리드한다. 실사용 예제와 키 알고리즘이 설명되어야 한다.
    2. Draft(초안): 표준의 초기 단계. 공식 언어를 사용해 주요 문법과 구문의 의미를 설명한 초기 스펙이 필요하다. TODO 마크의 사용이 가능하고 일부 실험적인 내용이 포함될 수 있다.
    3. Candidate(후보): 표준의 마무리 단계. 리뷰어들의 피드백이 적용되고 검토자, ECMAScript 작성자가 승인한 단계이다. 모든 문법과 구문에 대한 설명이 완료된 스펙이 필요하다. 이후 크리티컬한 문제가 발견되지 않는 한 수정하지 않는다.
    4. Finished(완료): 표준으로 지정할 준비가 완료된 단계. 테스트에 통과했으며 integrated 스펙과 함께 tc39/ecma262에 Pull Request가 보내져 모든 ECMAScript 작성자가 Pull Request를 승인한 상태이다.

* 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?  
  - 동적 타입 언어이다. 런타임 시 타입이 정해진다.
  - 프로토타입 기반 프로그래밍 언어이다. (cf. 클래스 기반 프로그래밍 언어)  
    메소드와 속성을 상속하기 위해 프로토타입 객체를 사용한다.  
    상속받은 메소드와 속성은 객체의 인스턴스에 정의되어 있는 게 아니라 객체의 생성자의 `prototype`이라는 속성에 정의되어있다.  
    객체의 메소드와 속성을 호출하면 프로토타입 체인을 타고 올라가며 호출한 메소드와 속성을 탐색한다.  
    * 생성자 함수: 객체를 생성하는 함수
    * 프로토타입 체인: 객체 인스턴스와 프로토타입 객체 간의 링크, 그 프로토타입 객체와 상위 프로토타입 객체 간의 링크가 최상위 프로토타입 객체까지 연결되는 구조
  - 싱글 스레드 기반 비동기 언어이다.
    * 싱글 스레드  
    자바스크립트 엔진은 하나의 Call Stack을 가진다. 후입선출(LIFO, Last In First Out) 방식으로 한 번에 하나의 함수를 호출할 수 있는 구조를 가진다는 의미이다.
    * 비동기  
    자바스크립트는 코드가 작성된 순서대로 실행되는 것을 보장하지 않는다. 이를 비동기라 하는데 자바스크립트가 비동기적으로 코드를 실행할 수 있는 이유는 Callback때문이다.  
    어떤 함수를 실행할 때 콜백함수를 함께 전달하는데 함수의 실행이 완료되면 콜백함수를 자바스크립트 엔진 외부에 있는 Callback Queue(Task Queue)에 저장한다. Event Loop는 Call Stack을 주시하다가 Call Stack이 비어있으면 Callback Queue의 작업을 Call Stack으로 옮긴다.

  * 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?
    - for문
      ```javascript
      for (let i = 0; i < 10; i++) {
        // code
      }
      ```
    - do while문
      ```javascript
      let i = 0;

      do {
          i++;
      } while (i <> 10);
      ```
    - while문
      ```javascript
      let i = 0;

      while (i < 10) {
          i++;
      }
      ```

* 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
  ```javascript
  const box = document.querySelector('div');

  // 덮어쓰기, my-box만 남는다.
  box.setAttribute('class', 'my-box');
  // 기존 클래스에 my-box가 추가된다.
  box.classList.add('my-box');
  // 모든 클래스 삭제
  box.removeAttribute('class');
  // my-box만 삭제
  box.classList.remove('my-box');
  ```
  * IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?

* 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?  
  변수 선언문이 무엇이냐에 따라 달라진다. (`var`, `let`, `const`)
  * `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?  
    `var` 키워드는 function-scoped(또는 globally-scoped) 변수를 선언한다.  
    변수는 함수 안에서 유효하며 재선언이 가능하다. 변수 선언 부가 hoisting으로 인해 함수 최상단으로 끌어 올려지기 때문이며 먼저 선언된 변수는 후에 선언된 변수로 덮어 쓰인다.  
    최상단 스코프에서 window 객체에 새로운 property를 생성할 수 있다.  

    `let` 키워드는 block-scoped 변수를 선언한다.  
    변수는 선언된 블록 안에서 유효하다.  
    변수를 재선언할 수 없으며 재할당은 가능하다.

* 자바스크립트의 익명 함수는 무엇인가요?  
  이름이 없는 함수로 Callback 등의 목적으로 다른 함수의 파라미터로 전달하거나 일회성으로 즉시 실행이 필요한 경우(IIFE, Immediately Invoked Function Expression)일 때 사용한다.  
  또는 변수 선언문에 익명 함수를 할당해 변수 이름으로 사용하기도 한다. 이 경우 호이스팅되지 않아 선언 부에 도달하기 전에 호출할 경우 에러가 발생한다.

  * 자바스크립트의 Arrow function은 무엇일까요?  
  기존 함수 표현식을 좀 더 짧게 표현할 수 있는 함수 표현식이다.  
  `function[name]([parameter]) {}` -> `([parameter]) => {}`  
  단, 자신의 `this`가 없어 화살표 함수를 감싸는 스코프(lexical scope)의 `this`를 참조한다.

## Quest
* (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  * [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    * 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  * `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  * 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  * 출력은 `console.log()` 함수를 통해 할 수 있습니다.
* (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  * 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
  * 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
* 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.

## Advanced
* Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
* Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?

## Link
- [위키 백과 - ECMA스크립트](https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)
- [W3 School - JS Versions](https://www.w3schools.com/js/js_versions.asp)
- [ECMAScript와 TC39](https://ahnheejong.name/articles/ecmascript-tc39/)
- [TC39 proposal process에 대해서](https://trustyoo86.github.io/javascript/2019/12/11/tc39-process.html)
- [The TC39 Process](https://tc39.es/process-document/)
- [ECMAScript® 2022 Language Specification](https://tc39.es/ecma262/multipage/)
- [자바스크립트와 다른언어의 차이점](https://sdcodebase.tistory.com/22)
- [Object Prototypes](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes)
- [자바스크립트 싱글스레드인데 왜 비동기적 일까?](https://velog.io/@eamon3481/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%B1%EA%B8%80%EC%8A%A4%EB%A0%88%EB%93%9C%EC%9D%B8%EB%8D%B0-%EC%99%9C-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%A0%81-%EC%9D%BC%EA%B9%8C)
- [자바스크립트의 작동 원리](https://frontcode.tistory.com/30?category=685416)
- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [09. 호이스팅 (Hoisting)](https://simplejs.gitbook.io/olaf/09.-hoisting)
- [익명함수(Anonymous function)](https://velog.io/@blackb0x/%EC%9D%B5%EB%AA%85%ED%95%A8%EC%88%98Anonymous-function)
- [How TO - Add a Class](https://www.w3schools.com/howto/howto_js_add_class.asp)
