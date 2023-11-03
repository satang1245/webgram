# 변수 & 상수

## 변수 (variable)
변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름.

### 변수는 왜 사용하는가?
```javascript
var userId = 1; // 할당 (변수명 = 변수값)
var userName = 'Lee';
```
변수는 연산된 결과값을 재사용 할 수 있도록 저장된 메모리 공간에 상징적인 이름을 붙인 것이다.   
*변수명은 *식별자* 라고도 불린다.

### 변수는 어디에 저장되는가?
변수는 자바스크립트 엔진내 관리영역인실행 `컨텍스트`에 저장되며,  
실행 컨텍스트 내에 **키(key)** / **값(value)** 형식인 객체로 등록되어 관리된다.

---

### 변수 선언 및 할당
```javascript
var str;  // 변수 선언
str = 'Hello World';  // 변수 할당
str = 'Nice to meet you!'; // 변수 재할당

// 변수 선언 및 할당
var person = 'Son',
    address = 'Seoul',
    age = 29;

var person, address, age; //변수 선언
person = 'Son';         // 변수 할당
address = 'Seoul';      // 변수 할당
age = 29;               // 변수 할당
```
