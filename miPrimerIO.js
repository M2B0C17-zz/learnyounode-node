var fs = require('fs');
var numero = 0;
var pro = process.argv[2];

function printing(callback){
fs.readFile(pro, function(err,data){
	var str=data.toString();
	str=str.split('\n');
	numero=str.length-1;
	callback();

})
}
function printresult(){
	console.log(numero);
}

printing(printresult);