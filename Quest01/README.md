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

    1. Working Draft  
    초안을 공개한 뒤 검토를 반복하며 보완한다.
    1. Candidate Recommandation  
    문서에 대한 내용을 실제로 구현해보며 구현 경험을 반영하고 위험할 수 있는 기능에 대해 수정한다. 필요에 따라서 Working Group에게 돌려 보내질 수 있다. 또는 작업이 종료될 수 있다.
    1. Proposed Recommandation  
    표준 문서로 채택하기 위해 자문 위원회가 검토한다. 필요에 따라 Candidate Recommandation 단계로 돌아가거나 Working Group에게 되돌려 보내질 수 있다. 마찬가지로 작업이 종료될 수 있다.
    1. Recommandation  
    W3C가 사용을 권고하는 표준 문서로 발표한다.
    - 언제든지 작업을 종료할 수 있으며 작업 결과는 Recommandation 또는 Working Group Note로 공개한다.

* 브라우저의 역사는 어떻게 될까요?
  * Internet Explorer가 브라우저 시장을 독점하면서 어떤 문제가 일어났고, 이 문제는 어떻게 해결되었을까요?

    Internet Explorer가 시장을 독점한 뒤 지원 개발을 중단하면서 브라우저가 더이상 발전하지 않는 시기가 도래한다. Internet Explorer는 웹 표준을 제대로 지키지 않아 다른 브라우저, 기존 버전과 호환이 제대로 이루어지지 않았으며 이는 사용자 불편을 야기했다.  
    스마트폰이 보급되고 모바일 환경의 브라우저들이 Internet Explorer의 대안이 되면서 해소되었다.

  * 현재 시점에 브라우저별 점유율은 어떻게 될까요? 이 브라우저별 점유율을 알아보는 것은 왜 중요할까요?

    - Chrome: 63.3%
    - Safari: 17.7%
    - Firefox: 5.8%
    - IE, Edge: 5.4%
    - Opera: 1.3%

    출처: [https://www.w3counter.com/trends](https://www.w3counter.com/trends)
    브라우저 점유율을 알아보는 것이 중요한 이유는.. 크로스 브라우징 때문일까? 아직 잘 모르겠다.

  * 브라우저 엔진(렌더링 엔진)이란 무엇일까요? 어떤 브라우저들이 어떤 엔진을 쓸까요?

    HTML 파일을 사용자가 보는 화면(사용자 인터페이스)으로 바꿔주는(Render) 내부의 소프트웨어. PC Mag을 따르면 브라우저 엔진은 렌더링 엔진을 포함한다. 위키 백과에서도 둘은 이론적으로 구분할 수는 있지만 이는 드물다고 한다.
    - 브라우저 엔진: 사용자 인터페이스와 렌더링 엔진 사이의 동작을 제어하는 엔진
    - 렌더링 엔진: 사용자가 요청한 내용을 화면에 출력하는 엔진
    - 브라우저별로 사용하는 엔진
      - Chrome: **Blink** (**Webkit**에서 파생된 엔진)
      - Safari: **Webkit** (**KHTML**에서 파생된 엔진)
      - Konqueror([KDE](https://www.notion.so/863f0b90067c478c95a493216a46e672)의 중심이 되는 브라우저, 파일 관리자, 파일 뷰어): **KHTML** (KDE 프로젝트가 개발한 엔진)
      - Firefox: **Gecko** (모질라 재단의 엔진)

  * 모바일 시대 이후, 최근에 출시된 브라우저들은 어떤 특징을 가지고 있을까요?

    모바일 브라우저는 작은 화면에 효율적으로 웹 콘텐츠를 보여주기 위해 최적화되어있다. 언제 출시되었는지에 대해 알아보진 않았지만 statcounter에서 제공하는 모바일 웹 점유율이 높은 브라우저의 특징은 다음과 같다.
      - Chrome: 데이터 절약 모드 기능 제공
      - Safari: 애플 제품과 연동 가능
      - Samsung Internet: 삼성 패스를 사용한 보안 로그인 기능 제공

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
