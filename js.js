function func1(p) {
	var a = document.getElementById("screen").value;
	a = a + p;
	document.getElementById("screen").value = a;
}

function func2() {
	var a = document.getElementById("screen").value;
	document.getElementById("result").value = eval(a);	
}

function func3() {
	var a = document.getElementById("screen").value;
		document.getElementById("screen").value = null;
}