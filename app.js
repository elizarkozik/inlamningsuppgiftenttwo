var income= [];
var incomeNumber=[];

var expanses = [];
var expansesNumber=[];

var totalIn=0;
var totalUt=0;
var vinst=0;

var addButton = document.querySelector("#add");
console.log(addButton);

function click() { 
	var description = document.querySelector("#description").value;
	var value = document.querySelector("#value").value;
	var choice = document.querySelector("#choice").value;

	if (choice =="+") {
	income.push(description, value);
	incomeNumber.push(value); 

	totalIn += Number(value);
	var text = "";
	var i;
  	for (i = 0; i < income.length;i++) {
		if (i%2 != 0){  
              	text += income[i] + " $;<br>"; 
      		}   
		else {text += income[i] + ": "; }
 		
  	}
  	document.getElementById("demo").innerHTML = text;
  	document.getElementById("demo3").innerHTML = "+" + totalIn.toString();
	document.getElementById("description").value= "";
	document.getElementById("value").value= "";
	}

	if (choice =="-") {
		expanses.push(description, value);
		expansesNumber.push(value);

		totalUt += Number(value);
		var text2 = "";
		var j;
  		for (j = 0; j < expanses.length;j++) {
 		if (j%2 != 0){  
              	text2 += expanses[j] + " $;<br>"; 
      		}   
		else {text2 += expanses[j] + ": "; }
     		}
 		document.getElementById("demo2").innerHTML = text2;
 		document.getElementById("demo4").innerHTML = "-" + totalUt.toString();
		document.getElementById("description").value= "";
		document.getElementById("value").value= "";
	}
	vinst=totalIn-totalUt;
	document.getElementById("demo5").innerHTML = vinst.toString();
} 

console.log(income);
console.log(expanses);
console.log(incomeNumber);
console.log(expansesNumber);

addButton.addEventListener("click" , click);

function myFunction() {
 

  
  
}