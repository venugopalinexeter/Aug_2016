//Function that accepts another function as an argument or returns another function as output value is called "higher order function"

function doSomethingElse(){
	return function(){
		console.log("Please save me");
	};
}
var output = doSomethingElse();
output();

function doSomething(fn){
	fn();
}

var eat = function(item){
	console.log("Eating " + item);
};

eat("Noodles");

var sleep = function(){
	console.log("Sleeping");
};

doSomething(sleep);

function work(){
	console.log("Working");
}
doSomething(work);//work()

/*function eat(item){
	console.log("Eating " + item);
}*/
