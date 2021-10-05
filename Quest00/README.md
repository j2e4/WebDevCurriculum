# Quest 00. 형상관리 시스템

## Introduction
* git은 2021년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`, `git add`, `git commit`, `git push`, `git pull`, `git branch`, `git stash` 명령
  * `.git` 폴더
* GitHub

## Resources
* [Resources to learn Git](https://try.github.io)
* [Learn Git Branching](https://learngitbranching.js.org/?locale=ko)
* [Inside Git: .Git directory](https://githowto.com/git_internals_git_directory)

## Checklist
* 형상관리 시스템은 왜 나오게 되었을까요?
```
하나의 레파지토리(프로젝트)에 여러 명의 실무자가 작업한 결과물을 효율적으로 관리하기 위해
```
* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
  * git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
```
분산형 형상 관리 시스템
모든 실무자의 로컬 환경에 중앙 서버와 동일한 레파지토리를 구성하는 형상 관리 시스템이다.
각 실무자는 로컬 환경에서 변경 사항을 적용한다. 모든 실무자의 작업 내용은 중앙 서버에서 하나로 합쳐진다.

git은 리누스 토발즈가 리눅스 커널 버전을 관리하기 위해 사용하던 BitKeeper를 무료로 사용할 수 없게 되자 개발하기 시작했다. 
"누구나 스스로의 버전을 관리할 수 있다."는 Git의 설계 철학에 따라 분산형 시스템을 채택했다고 생각한다.
```
* git과 GitHub은 어떻게 다를까요?
```
git
  * 버전 관리 시스템
  * 프로젝트의 버전 관리를 수월하게 하기 위해 사용하는 도구
   * 변경 이력 확인, 특정 버전으로 이동 등

GitHub
  * git으로 관리하는 프로젝트를 모아놓은 웹 서비스
  * 개발팀 공동의 프로젝트를 관리할 수 있는 원격 저장소를 제공한다.
```
* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
```
clone
  * 레파지토리를 복제하는 명령어
  * 앞으로 개발에 기여할 git 프로젝트를 로컬 환경의 저장소로 복제할 때 사용한다.

add
  * 수정 내용을 stage(수정 내용을 저장소에 적용하기 전에 잠시 보관)하는 명령어
  * 파일 이름, 경로로 stage할 수 있으며 git restore --staged 명령으로 unstage할 수 있다. 
  * -p 옵션을 사용하면 내용을 확인하면서 stage할 수 있다.
  * commit을 준비하기 위해 사용한다.

commit
  * 작업한 내용을 로컬 저장소에 저장하는 명령어

push
  * 로컬 저장소에 commit한 내용을 원격 저장소에 저장하는 명령어

pull
 * 원격 환경과 로컬 환경을 동기화하는 명령어
 * 원격 환경에 새롭게 저장된 내역을 로컬 환경으로 가져와 버전을 맞출 때 사용한다.

branch
  * 브랜치 관련 명령어. 브랜치를 생성하고 삭제(-d 옵션)하거나 조회(--list 옵션)하는 등 브랜치와 관련된 동작을 수행한다.
  * 브랜치를 구분해 작업하고 싶을 때, 오래된 브랜치를 정리하고 싶을 때와 같이 실무자의 니즈에 따라 자유롭게 사용한다.

stash
  * 작업하던 내용을 임시 저장하는 명령어
  * pull, rebase를 할 때 발생할 수 있는 충돌을 예방하거나 적용하지 않을 테스트 코드를 버리고 싶지 않을 때 사용한다.
```
* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
```
git은 key-value 형태로 데이터를 저장한다.
무엇을 저장하든 unique한 key를 반환하는데 이 key는 저장했던 내용을 나중에 다시 접근할 때 사용한다.

Object
  * git으로 관리하는 모든 데이터
  * .git/objects 경로(object database)에 key-value 형태로 저장된다. 데이터 타입이 무엇이든 상관없다.
  * git hash-object 명령으로 object database에 data object를 저장할 수 있다.
  * git cat-file 명령으로 object에 대한 내용을 확인할 수 있다.

Commit
  * 이전 버전에서 수정한 내용(delta)을 저장하는 행위
  * 특정 시점의 스냅샷(이전에 완료한 모든 작업과 delta를 포함한 작업 트리)을 의미하기도 한다. 

Head
  * 현재 브랜치가 가리키고 있는 커밋

Branch
  * 커밋에 대한 참조
  * 해당 커밋(이번에 적용한 수정 내역)과 이전에 완료한 모든 작업 내역을 가지고 있다.

Tag
  * 특정 커밋을 가리키는 지점
  * 영구적이며 변하지 않는다.

git은 히스토리를 기록할 때 이전 커밋과 다음 커밋의 달라진 점을 저장한다.
```
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
```
git revert 명령을 사용해 이미 원격 저장소에 적용된 커밋 내용을 되돌리는 커밋을 새로 생성한다.
```

## Quest
* GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.

## Advanced
* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?

## Link
* [위키 백과 - 구성 관리](https://ko.wikipedia.org/wiki/%EA%B5%AC%EC%84%B1_%EA%B4%80%EB%A6%AC)
* [리누스 토발즈 인터뷰 (한글 번역)](https://sjp38.github.io/ko/post/torvalds_interview_for_30th_anniversary_of_linux_kernel_part1/)
* [git add](https://www.daleseo.com/git-add/)
* [git Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)
