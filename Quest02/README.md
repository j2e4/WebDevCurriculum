# Quest 02. CSS의 기초와 응용

## Introduction
* CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics
* CSS의 기초 문법과 적용 방법
  * Inline, `<style>`, `<link rel="stylesheet" href="...">`
* CSS 규칙의 우선순위
* 박스 모델과 레이아웃 요소
  * 박스 모델: `width`, `height`, `margin`, `padding`, `border`, `box-sizing`
  * `position`, `left`, `top`, `display`
  * CSS Flexbox와 Grid
* CSS 표준의 역사
* 브라우저별 Developer tools

## Resources
* [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
* [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist
* CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
  * 세 가지 방법 각각의 장단점은 무엇일까요?
    1. External CSS  
      `<head>`태그 밑에 `<link>`태그로 외부 CSS 파일의 스타일을 적용한다.
        - 장점: HTML 파일의 구조가 깔끔해지며 같은 CSS 파일을 여러 곳에서 사용할 수 있다.
        - 단점: CSS 파일을 다운로드하는 시간이 필요하고 로드하는 동안 스타일이 적용되지 않는다.
    2. Internal CSS  
      `<head>`태그 밑에 `<style>`태그 내부에 적용할 CSS 스타일을 선언한다.
        - 장점: 해당 HTML파일에만 적용되므로 CSS 선택자 사용이 비교적 자유롭다.
        - 단점: HTML 파일의 사이즈가 커져 로딩 시간이 증가할 수 있다.
    3. Inline CSS  
      각 태그의 속성(attribute)으로 해당 태그만을 위한 스타일을 적용한다.  
      ex) `<div style="padding: 5px;">Hello World</div>`
        - 장점: 빠르게 스타일을 적용할 수 있다.
        - 단점: HTML 구조가 복잡해져 가독성이 떨어진다.

* CSS 규칙의 우선순위는 어떻게 결정될까요?  
  아래 나열된 번호가 낮을 수록 우선 순위가 높다. (나중에 선언된 스타일이 이전에 선언된 스타일을 Override, 덮어쓴다.)
  1. Inline CSS
  1. Internal CSS, External CSS
  1. 브라우저 기본 스타일

  > `!important`가 선언된 경우 `!important`가 아닌 스타일보다 우선 순위가 높다. 나중에 선언된 스타일이 override하지 못한다.

* CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?  
  브라우저의 렌더링 엔진이 하나의 요소를 표현하는 CSS 모델  
  하나의 박스는 다음의 네 개의 영역으로 구성된다.
    - Content
    - Padding(Conent의 안쪽 여백)
    - Border
    - Margin(Content의 바깥쪽 여백)

* `float` 속성은 왜 좋지 않을까요?  
  (복잡한) 레이아웃을 구성하기 위해 float를 사용하는 것은 hack이라고 한다. float는 레이아웃을 구성하는 목적이 아닌 float를 적용할 요소의 주변을 텍스트나 인라인 요소로 감싸려는 목적으로 사용해야한다.

* Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
* CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?

## Quest
* Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](screen.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
* **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**

## Advanced
* 왜 CSS는 어려울까요?
* CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?
* CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?
* 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?

## Link
- [W3 Schools - CSS How To](https://www.w3schools.com/css/css_howto.asp)
- [CSS Inheritance, Cascade, and Specificity](http://web.simmons.edu/~grabiner/comm244/weekfour/css-concepts.html)
- [MDN - CSS 기본 박스 모델 입문](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [CSS Tricks - Is CSS float deprecated?](https://css-tricks.com/is-css-float-deprecated/)
- [MDN - float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
