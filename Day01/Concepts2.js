//Collections
var arr = []; //new Array();
var arr2 = [1,234,4,true,"stting",null];

for(var i=0;i<arr2.length;i++){
	console.log(arr2[i]);
}
var countries = [];
countries["India"] = "New Delhi";
countries["USA"] = "Washington DC";

for(var key in countries){
	console.log(key + " : " + countries[key]);
}