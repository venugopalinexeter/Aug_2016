//You can invoke a function by passing any number of arguments
function doSomething(){
	console.log("Doing Something stupid");
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
}
doSomething();
doSomething("Work");
doSomething(24,7);
doSomething(24,7,365,"days");
doSomething(false);
