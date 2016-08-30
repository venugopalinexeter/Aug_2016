//Function Hoisting

eat("Rice");
eat("Roti");

work();

function eat(item){
	console.log("Eating " + item);
}

function work(){
	console.log("Yawn, Sleep, Snore");
}
