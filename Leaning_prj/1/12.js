/*function identify() {
    return this.name.toUpperCase();
    }

function speak() {
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
}

var me = {
    name: "Kyle"
    , age: "12"
};

var you = {
    name: "Reader"
    , age: "30"
    , sex: "men"
};

var somebody = {
  name: "nobody"
  , age : "0"
  , sname: "you  know"
};

identify.call( me ); // KYLE
identify.call( you ); // READER
identify.call( somebody );*/
/////////////////////////////////////////////////

//speak.call( me ,"name","age"); // Hello, I'm KYLE
//speak.call( you, "sex" ); // Hello, I'm READER
//speak.call( somebody, "name" );


/*function foo() {
    console.log( this.a );
}

var a = 2;

foo(); // 2
*/

/*function foo() {
    "use strict";

    console.log( this.a );
}

var a = 2;

foo();*/

function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2