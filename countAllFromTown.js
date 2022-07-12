module.exports = function countAllFromTown(str, regNum){
	var list = str.split(',');
  	var count = 0;
  	for(var i = 0; i < list.length; i++){
    	var x = list[i].trim(" ");
      	if(x.startsWith(regNum)){
           	count++;
        }
    }
  	return count;
}
