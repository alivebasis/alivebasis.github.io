##### Q. 함수 호출시 new 를 붙인 것과 안 붙인 것의 차이를 설명하세요.

```javascript
var obj = function (name) {
   this.name = name;
   console.log(this);
   console.log(this.name);
};
obj('양꼬치');	   //	 출력결과
			  	 //		window{...}
			  	 //   	양꼬치
new obj('핑클'); // 	  출력결과
			    // 		obj{ name:"핑클" }
			    //  	핑클
```

- new없이 호출(일반함수 호출) : this가 window(전역객체)객체로 바인딩된다.

- new 호출(생성자함수 호출) : this가 새로 생성되는 객체로 바인딩된다.


------



##### Q. 객체 내에서의 this 를 설명하세요.

```javascript
var obj = {
	init : function () {
		console.log(this); 		//출력결과: object{ init:function }
		console.log(this.init); //출력결과: function(){ console.log(this)... }
	}
};
obj.init();
```

- 객체 내 메서드를 호출하여 출력한 this는 해당 메서드가 속한 객체로 바인딩되어,

  자기 자신을 가리킨다.

------



##### Q. 객체 내의 다른 메서드를 호출해보세요.

```javascript
var obj = {
    init : function () {
      setElements(); 		//출력결과: setElements is not defined
      this.setElements(); 	//출력결과: call
    },
    setElements : function () {
      console.log('call');
    }
};
obj.init();
```

- 객체 내에서, (객체 내) 다른 메서드를 호출하면 오류가 발생한다.

  그러나 해당 객체를 지정(this)하여 호출하면, 정상적으로 호출이 된다.

------



##### Q. 객체 내에서 다른 객체의 메서드를 호출해보세요.

```javascript
var obj = {
	init : function () {
		obj2.init();	//출력결과: call
	}
};
var obj2 = {
	init : function () {
		console.log('call');
	}
};
obj.init();
```

- 객체의 프로퍼티를 이용하여, 각각의 다른 객체 간의 접근이 가능하다.

------



##### Q. 데이터 타입들을 모두 넣은후, 값들을 출력해보세요.

```javascript
var obj = {
	func : function () {
		console.log('func');
	},
	num : 3,
	string : 'soju',
	boolean : 'true',
	array : ['a','b','c'],
	null : null
};								//출력결과
console.log(obj.func);			//function(){ console.log('func') }
console.log(obj.num);			//3
console.log(obj.string);		//soju
console.log(obj.boolean);		//true
console.log(obj.array);			//['a','b','c']
console.log(obj.null);			//null
console.log(obj.undefined);		//undefined
```



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