/*********************--1--**********/

function sumArgs() {
	var sum = 0;

	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}

	return sum;

}

console.log( sumArgs() ); 
console.log( sumArgs(1) ); 
console.log( sumArgs(1, 2) ); 

/*********************--1.2--**********/

function f(x){
	if (arguments.length) {
		return 1
	}
	else return 0;
}

console.log( f(undefined) ); 
console.log( f() ); 

/*****************--2--*****************/

sayHi ( "Вася" );
function sayHi ( name ) {
// alert ( "Привет, " + name );
console.log( "Привет, " + name );

}


sayHi ( "Вася" );
var sayHi = function ( name ) {
// alert ( "Привет, " + name );
console.log( "Привет, " + name );

}

/* Ошыбки не будет */

/*****************--3--*****************/

function sumTo(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log( sumTo(1) );
console.log( sumTo(2) );
console.log( sumTo(3) );

/*****************--4--*****************/

var count = prompt("Enter number?", );

while ( isNaN(count) ) {
alert( "Wrong parametr, enter number" );
var count = prompt("Enter number?", );
}

var text  = prompt("Enter your message ?", );
var	i = 0;
while(i < count){
	
  i++;	
  alert( text );
}




/*****************--5--*****************/

var arr = [];

function arrRandom(){
	for(var i = 0; i < 100; i++){
		arr[i] = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
	}
var i;
for (i = 0; i < arr.length; i++) {
	if(arr[i] ==7){
		
	console.log("oh, such lucky number  :" + arr[i]);
	break;
	}	
	if(arr[i] >= 1 && arr[i] <= 10 ){
		
	console.log("hello from number  :" + arr[i]);
	}
}
	
}
arrRandom();

/**************

Test писался в sublime text 3, проверялся в консоле google chrome.

***************/