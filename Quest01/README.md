# Quest 01. HTML과 웹의 기초

## Introduction
* HTML은 HyperText Markup Language의 약자로, 웹 브라우저에 내용을 표시하기 위한 가장 기본적인 언어입니다. 이번 퀘스트를 통해 HTML에 관한 기초적인 사항들을 알아볼 예정입니다.

## Topics
* HTML의 역사
  * HTML 4.01, XHTML 1.0, XHTML 1.1
  * XHTML 2.0과 HTML5의 대립
  * HTML5와 현재
* 브라우저의 역사
  * Mosaic와 Netscape
  * Internet Explorer의 독점시대
  * Firefox와 Chrome의 등장
  * iOS Safari와 모바일 환경의 브라우저
  * Edge와 Whale 등의 최근의 Chromium 계열 브라우저
* HTML 문서의 구조
  * `<html>`, `<head>`와 `<body>` 등의 HTML 문서의 기본 구조
  * 시맨틱 엘리먼트
  * 블록 엘리먼트와 인라인 엘리먼트의 차이

## Resources
* [MDN - HTML](https://developer.mozilla.org/ko/docs/Web/HTML)
* [HTML For Beginners](https://html.com/)
* [History of the web browser](https://en.wikipedia.org/wiki/History_of_the_web_browser)
* [History of HTML](https://en.wikipedia.org/wiki/HTML)
* [StatCounter](https://gs.statcounter.com/)

## Checklist
* HTML 표준의 역사는 어떻게 될까요?

  Tim Berners-Lee가 CERN 사내 문서를 공유하며 이용하기 위해 HTML을 처음으로 제안했다.  
  1993년 Berners-Lee는 IETF(국제 인터넷 표준화 기구)에 의해 최초의 HTML 표준을 정의, 1995년 IETF의 HTML Working Group이 HTML2.0을 완성한다.
  1996년부터 W3C가 웹 표준을 제안하며 유지하고 있다.

  * HTML 표준을 지키는 것은 왜 중요할까요?

    다양한 브라우저를 유연하게 지원할 수 있다. 표준이 존재하지 않는다면 각각의 환경을 위한 개발이 따로따로 필요할 것이다.  
    또한 정보 취약 계층의 이용 경험(스크린 리더) 또한 고려되어야하기 때문이다.

  * XHTML 2.0은 왜 세상에 나오지 못하게 되었을까요?

    XHTML은 HTML에 XML 문법을 도입한 버전이다.  
    XHTML은 HTML보다 엄격하게 문법을 체크하지만 파싱 오류 메시지가 친절하지 않아 개발자들에게 선택을 받지 못했다. 이전 버전과의 하위 호환성에 대한 문제도 해결되지 않았다. 결국 W3C는 2009년 XHTML 2.0에 대한 지원을 중지한다고 발표했다.

  * HTML5 표준은 어떤 과정을 통해 정해질까요?
* 브라우저의 역사는 어떻게 될까요?
  * Internet Explorer가 브라우저 시장을 독점하면서 어떤 문제가 일어났고, 이 문제는 어떻게 해결되었을까요?
  * 현재 시점에 브라우저별 점유율은 어떻게 될까요? 이 브라우저별 점유율을 알아보는 것은 왜 중요할까요?
  * 브라우저 엔진(렌더링 엔진)이란 무엇일까요? 어떤 브라우저들이 어떤 엔진을 쓸까요?
  * 모바일 시대 이후, 최근에 출시된 브라우저들은 어떤 특징을 가지고 있을까요?
* HTML 문서는 어떤 구조로 이루어져 있나요?
  * `<head>`에 자주 들어가는 엘리먼트들은 어떤 것이 있고, 어떤 역할을 할까요?
  * 시맨틱 태그는 무엇일까요?
    * 시맨틱 엘리먼트를 사용하면 어떤 점이 좋을까요?
    * `<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요?
  * 블록 레벨 엘리먼트와 인라인 엘리먼트는 어떤 차이가 있을까요?

## Quest
* [이 화면](screen.png)의 정보를 HTML 문서로 표현해 보세요. 다만 CSS를 전혀 사용하지 않고, 문서의 구조가 어떻게 되어 있는지를 파악하여 구현해 보세요.
  * [CSS Naked Day](https://css-naked-day.github.io/)는 매년 4월 9일에 CSS 없는 웹 페이지를 공개하여 내용과 마크업에 집중한 HTML 구조의 중요성을 강조하는 행사입니다.
* 폴더에 있는 `skeleton.html` 파일을 바탕으로 작업해 보시면 됩니다.
  * 화면을 구성하는 큰 요소들을 어떻게 처리하면 좋을까요?
  * HTML 문서상에서 같은 층위에 비슷한 요소들이 반복될 때는 어떤 식으로 처리하는 것이 좋을까요?

## Advanced
* XML은 어떤 표준일까요? 어떤 식으로 발전해 왔을까요?
* YML, Markdown 등 다른 마크업 언어들은 어떤 특징을 가지고 있고, 어떤 용도로 쓰일까요?
