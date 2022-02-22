# Quest 04. OOP의 기본

## Introduction
* 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍에 대해 알아볼 예정입니다.

## Topics
* 객체지향 프로그래밍
  * 프로토타입 기반 객체지향 프로그래밍
  * 자바스크립트 클래스
    * 생성자
    * 멤버 함수
    * 멤버 변수
  * 정보의 은폐
  * 다형성
* 코드의 재사용

## Resources
* [MDN - Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
* [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [MDN - Inheritance](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance)
* [Polymorphism](https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8)
* [Class Composition](https://alligator.io/js/class-composition/)
* [Inheritance vs Composition](https://woowacourse.github.io/javable/post/2020-05-18-inheritance-vs-composition/)

## Checklist
* 객체지향 프로그래밍은 무엇일까요?  
  목표하는 시스템의 행위를 구현하기 위해 **상태**와 **행위**를 가지고 다른 객체와 **협력**하는, 충분히 **자율적**인 객체들을 활용하는 프로그래밍 방법

  * `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?  
  프라이빗 필드는 객체 내부에서만 사용한다.  
  객체 내부에서만 사용하도록 정보를 은폐하면 정보에 대한 외부의 간섭을 줄일 수 있어 의존도를 낮출 수 있다.

  * 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?  
  하나의 객체로부터 파생된 여러 객체가 원천 객체의 속성(데이터, 상태), 메소드(행위)를 내포하면서 각자의 방식으로 확장해서 사용하는 특징을 의미한다.  
  의미가 같은 행위를 다수의 객체가 각자 다른 방식으로 구현해야 할 때 구조를 잡을 수 있다.

  * 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?  
  부모 객체의 속성과 메소드를 자식 객체가 물려받는 것이다.  
  코드의 중복을 막을 수 있지만, 자식 객체가 필요하지 않은 것까지 상속받아야 하는 상황이 발생할 수 있다.
  * OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?
* 자바스크립트의 클래스는 어떻게 정의할까요?
  * 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?
  * 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?

## Quest
* 웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
* 요구사항은 다음과 같습니다:
  * 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
  * 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
  * 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
  * 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
  * 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
  * Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!

## Advanced
* 객체지향의 역사는 어떻게 될까요?
* Smalltalk, Java, Go, Kotlin 등의 언어들로 넘어오면서 객체지향 패러다임 측면에서 어떤 발전이 있었을까요?

## Links
- [객체지향의 사실과 오해](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788998139766&orderClick=LEa&Kc=#N)
- [객체지향 프로그래밍이 뭔가요?](https://youtu.be/vrhIxBWSJ04)
