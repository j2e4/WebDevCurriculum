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
  * 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?
* 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
  * IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
* 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?
  * `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
* 자바스크립트의 익명 함수는 무엇인가요?
  * 자바스크립트의 Arrow function은 무엇일까요?

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
