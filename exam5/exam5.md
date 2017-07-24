##### Q. 함수 호출시 new 를 붙인 것과 안 붙인 것의 차이를 설명하세요.

```javascript
var obj = function (name) {
   this.name = name;
   console.log(this);
   console.log(this.name);
};
obj('치맥');
new obj('피맥');
/*
출력결과 :
window{...}
치맥
obj{name:"피맥"}
피맥
*/
```

- new없이 호출(일반함수 호출) : this가 window(전역객체)객체로 바인딩된다.

- new 호출(생성자함수 호출) : this가 새로 생성되는 객체로 바인딩된다.

  ​

------



##### Q. 객체 내에서의 this 를 설명하세요.

예시)
var obj = {
   init : function () {
​      console.log(this);
   }
};
obj.init();

##### Q. 객체 내의 다른 메서드를 호출해보세요.

예시)
var obj = {
   init : function () {
​      // setElements 함수를 호출해봐요~
   },
   setElements : function () {
​      console.log('call');
   }
};
obj.init();

##### Q. 객체 내에서 다른 객체의 메서드를 호출해보세요.

예시)
var obj = {
   init : function () {
​      // 객체 obj2 의 init 을 호출해봐요~
   }
};
var obj2 = {
   init : function () {
​      console.log('call');
   }
};
obj.init();

##### Q. 데이터 타입들을 모두 넣은후, 값들을 출력해보세요.

예시)
var obj = {
   func : function () {
​      console.log('func');
   },
   num : 3,
   ...
};
console.log(obj.func);
console.log(obj.num);

##### Q. 객체내의 모든 속성들의 값을 배열에 저장한후, abc 순으로 sorting 하여, 'abcdefg' 문자열로 출력해보세요.

예시)
var obj = {
   e : 'e',
   d : 'd',
   b : 'b',
   g : 'g',
   c : 'c',
   f : 'f',
   a : 'a'
};

##### Q. 'bcaebe' 문자열을 hasOwnProperty 를 사용해서, {a : 1, b : 2, c : 1, e : 2} 로 변경해보세요.