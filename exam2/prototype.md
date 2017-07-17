## Array.prototype

- Array.join() : 배열의 모든 요소를 연결해 하나의 문자열로 만듬.

  ```
  <script>
  var a = ['바람', '비', '불'];
  var myVar1 = a.join();      // myVar1에 '바람,비,불'을 대입
  var myVar2 = a.join(', ');  // myVar2에 '바람, 비, 불'을 대입
  var myVar3 = a.join(' + '); // myVar3에 '바람 + 비 + 불'을 대입
  var myVar4 = a.join('');    // myVar4에 '바람비불'을 대입
  console.log(myVar1);
  </script>
  ```

- Array.reverse() : 배열의 모든 요소를 역으로 재정렬한 배열을 반환함.

  ```
  <script>
  var a = ['바람', '비', '불'];
  var myVar1 = a.reverse();
  console.log(myVar1); //결과: [불, 비, 바람]
  </script>
  ```

- Array.sort() : 배열의 모든 요소를 정렬하여 반환함.

  - default로 오름차순으로 정렬되며, ASCII 문자 순서로 정렬됨.

    *(ex: 실제로는 11 > 2 이지만, 정렬 순서는 11, 2 순으로 정렬됨)*

  ```
  <script>
  var a = ['바람','비','불','치킨'];
  console.log(a.sort()); //결과: [바람,불,비,치킨]

  var b = [9, 17, 2, 10, 3, 1];
  console.log(b.sort()); //결과: 1, 10, 17, 2, 3, 9

  b.sort(function(a, b){ return a - b });
  console.log(b); //결과: 1, 2, 3, 9, 10, 17

  b.sort(function(a, b){ return b - a });
  console.log(b); //결과: 17, 10, 9, 3, 2, 1
  </script>
  ```

- Array.concat() : 인자로 들어온 배열이나 값들을, 기존 배열에 합쳐 새 배열을 반환함.

  ```
  <script>
  var a = ['바람', '비', '불'];
  var b = ['치킨', '피자', '족발'];
  var c = ['검', '파', '빨'];
  var myVar1 = a.concat(b); // a+b
  var myVar2 = a.concat(b,c); // a+b+c
  console.log(myVar1); //결과: [바람,비,불,치킨,피자,족발]
  console.log(myVar2); //결과: 바람,비,불,치킨,피자,족발,검,파,빨]
  </script>
  ```

- Array.slice() : 첫번째 인자의 index부터 두번째 인자(Optional) 값 번째까지에 대한 배열을 반환함.

  - 예) Array.slice(1,4)는 **2번째** 요소부터 4번째 요소까지의 배열을 반환함.

  ```
  <script>
  var a = ['바람', '비', '불','치킨', '피자', '족발'];
  var myVar1 = a.slice(2,5);
  var myVar2 = a.slice(4);
  console.log(myVar1); //결과: [불,치킨,피자]
  console.log(myVar2); //결과: [피자,족발]
  </script>
  ```

- Array.splice() : 배열 내 지정된 범위의 요소들을 빼서 반환함.

  - Array.splice(시작 index, 제거할 요소의 수(, 요소(,요소(, ...))));

  ```
  <script>
  var a = ['바람', '비', '불', '눈', '소나기'];
  var b = a.splice(2,2,'치킨','피자');
  console.log(a); //결과: [바람,비,치킨,피자,소나기]
  console.log(b); //결과: [불,눈]
  </script>
  ```

- Array.push() : 해당 배열의 끝에 요소가 추가됨.

  ```
  <script>
  var a = ['바람', '비', '불'];
  a.push('치킨');
  console.log(a); //결과: [바람,비,불,치킨]
  a.push('피자');
  console.log(a); //결과: [바람,비,불,치킨,피자]
  </script>
  ```

- Array.pop() : 해당 배열의 마지막 요소가 제거됨. *인자 넣어도 무시됨.*

  ```
  <script>
  var a = ['바람','비','불','치킨','피자'];
  a.pop();
  console.log(a); //결과: [바람,비,불,치킨]
  a.pop('바람'); //인자 무시. 무조건 마지막 요소가 제거됨.
  console.log(a); //결과: [바람,비,불]
  </script>
  ```

- Array.shift() : 배열의 첫번째 요소를 제거하고, 해당 배열을 반환함.

  ```
  <script>
  var a = ['바람','비','불','치킨','피자'];
  var b = a.shift();
  console.log(a); //결과: [비,불,치킨,피자]
  console.log(b); //결과: 바람
  </script>
  ```

- Array.unshift() : 배열 내 첫번째 순서에 해당 요소가 추가됨. 배열의 길이가 반환됨.

  ```
  <script>
  var a = ['바람','비','불'];
  var b = a.unshift('치킨','피자');
  console.log(a); //결과: [치킨,피자,바람,비,불]
  console.log(b); //결과: 5
  </script>
  ```

- Array.toString() : 배열 내 요소들을 문자열로 반환함.

  ```
  <script>
  var a = ['바람','비','불'];
  var b = a.toString();
  console.log(b); //결과: 바람,비,불
  </script>
  ```

- Array.indexOf() : 배열 내 해당 요소의 Index값을 반환하며, 존재하지않을 경우 -1을 반환함.

  ```
  <script>
  var a = ['바람','비','불','치킨'];
  var b = a.indexOf('치킨');
  var c = a.indexOf('피자');
  console.log(b); //결과: 3
  console.log(c); //결과: -1
  </script>
  ```

## String.prototype

- String.replace() : 문자열 내 글자를 교체하여 새로운 문자열을 반환함.

  ```
  <script>
  var a = 'Hello world!';
  console.log(a); //결과: Hello world!

  var b = a.replace('Hello', 'Goodbye');
  console.log(b); //결과: Goodbye world!
  </script>
  ```

- String.slice() : 첫번째 인자의 index부터 두번째 인자(Optional) 값 번째까지에 대한 문자열을 반환함.

  - 인자값이 -1일 경우, 마지막 문자를 반환함.

  ```
  <script>
  var a = 'Hello world!';
  var b = a.slice(2, 10);
  var c = a.slice(4);
  var d = a.slice(-1);
  console.log(b); //결과: llo worl
  console.log(c); //결과: o world!
  console.log(d); //결과: !
  </script>
  ```


- String.split() : 문자열을 인자 기준으로 분해하여 반환함.

  ```
  <script>
  var a = 'How are you?';
  var b = a.split();
  var c = a.split(''); 		//한글자씩 분해
  var d = a.split(' ');		//띄어쓰기 기준으로 분해
  var e = a.split(' ', 2);	//분해되는 문자열의 갯수 지정
  var f = a.split('o');		//해당 문자열을 제외하여 분해
  console.log(b); //결과: How are you?
  console.log(c); //결과: H,o,w, ,a,r,e, ,y,o,u,?
  console.log(d); //결과: How, are, you?
  console.log(e); //결과: How, are
  console.log(f); //결과: H, w are y, u?
  </script>
  ```

- String.search() : 해당 문자열의 시작점을 정수값으로 반환함. (0부터 순서대로 시작)

  ```
  <script>
  var a = 'How are you?';
  var b = a.search('you');
  var c = a.search('How');
  console.log(b); //결과: 8
  console.log(c); //결과: 0
  </script>
  ```

- String.match() : 인자 내 정규식 패턴과 일치하는 첫 문자열과, 해당 index를 반환함.

  ```
  <script>
  var a = 'How are you? you are so beautiful.';
  var b = a.match(/[a-c]/);
  console.log(b); //결과: [a, 4, How are ... beautiful]
  </script>
  ```

- String.trim() : 해당 문자열의 맨앞과 맨끝의 공백을 제거하여 반환함.

  ```
  <script>
  var a = '         Hello      world   ';
  var b = a.trim();
  console.log(b); //결과: Hello      world
  </script>
  ```

- String.indexOf() : 해당 문자의 index를 반환함. 검색이 시작되는 index를 지정할 수 있음.

  ```
  <script>
  var a = 'Hello world!';
  var b = a.indexOf('o');
  var c = a.indexOf('o', 6); //검색의 시작 index 지정 가능.
  console.log(b); //결과: 4
  console.log(c); //결과: 7
  </script>
  ```

## Object.prototype

- Object.hasOwnProperty() :

  ```

  ```