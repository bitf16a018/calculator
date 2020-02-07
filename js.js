function func1(p) {
    var a = document.getElementById("screen").value;
    a = a + p;
    document.getElementById("screen").value = a;
}

function divsign() {
    var a = document.getElementById("screen").value;
    a = a + "/";
    document.getElementById("screen").value = a;
}

function mulsign() {
    var a = document.getElementById("screen").value;
    a = a + "*";
    document.getElementById("screen").value = a;
}

function addsign() {
    var a = document.getElementById("screen").value;
    a = a + "+";
    document.getElementById("screen").value = a;
}

function subsign() {
    var a = document.getElementById("screen").value;
    a = a + "-";
    document.getElementById("screen").value = a;
}

function pntsign() {
    var a = document.getElementById("screen").value;
    a = a + ".";
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