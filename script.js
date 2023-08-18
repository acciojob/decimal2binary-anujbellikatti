function decimalToBinary(num) {
  //Write you code here
  let x;
	for(let i=0;i<num;i++){
		if(num%2===0){
		x = x + "0";
			num = num/2;
		}else{
			x = x + "1";	
			num = num/2;
		}
	}
	console.log(x);
}

window.decimalToBinary = decimalToBinary;
