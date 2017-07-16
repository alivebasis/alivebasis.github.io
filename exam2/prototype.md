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
  console.log(myVar1); // 불, 비, 바람 순서대로 출력
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
  console.log(myVar1); // 바람,비,불,치킨,피자,족발 출력
  console.log(myVar2); // 바람,비,불,치킨,피자,족발,검,파,빨 출력
  </script>
  ```

- Array.slice() : 첫번째 인자의 index부터 두번째 인자(Optional) 값 번째까지에 대한 배열을 반환함.

  예를 들어, Array.slice(1,4)는 **2번째** 요소부터 4번째 요소까지의 배열을 반환함.

  ```
  <script>
  var a = ['바람', '비', '불','치킨', '피자', '족발'];
  var myVar1 = a.slice(2,5);
  var myVar2 = a.slice(4);
  console.log(myVar1); // 불,치킨,피자 출력
  console.log(myVar2); // 피자,족발 출력
  </script>
  ```

- Array.splice() : 배열 내 지정된 범위의 요소들을 빼서 반환함.

  Array.splice(시작 index, 제거할 요소의 수(, 요소(,요소(, ...))));

  ```
  <script>
  var a = ['바람', '비', '불', '눈', '소나기'];
  var b = a.splice(2,2,'치킨','피자');
  console.log(a); // 바람,비,치킨,피자,소나기 출력
  console.log(b); // 불,눈 출력
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

- String.replace() :

  ```

  ```

- String.slice() :

  ```

  ```


- String.split() :

  ```

  ```

- String.search() :

  ```

  ```

- String.match() :

  ```

  ```

- String.trim() :

  ```

  ```

- String.indexOf() :

  ```

  ```

## Object.prototype

- Object.hasOwnProperty() :

  ​