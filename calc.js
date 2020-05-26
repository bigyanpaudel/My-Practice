var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener('submit' ,function(event){
	if(!num1.value || !num2.value){
		alert("The fields cannot be empty");
	}else{
		var x = parseFloat(num1.value);
		var y = parseFloat(num2.value);
		console.log(x);

		var result = (x/y) * 100;
		console.log(result);
		event.preventDefault();

		resultField.innerText = "The answer is:  " + result + "  	 %";
	}

} )