function mycalculate(){
    var a = parseFloat(document.getElementById("rating").value);
    var b = parseFloat(document.getElementById("rating1").value);
    var c = parseFloat(document.getElementById("rating2").value);
    var d = parseFloat(document.getElementById("rating3").value);
    var e = parseFloat(document.getElementById("rating4").value);
    var f = parseFloat(document.getElementById("rating5").value);
    var g = parseFloat(document.getElementById("rating6").value);
    var h = parseFloat(document.getElementById("rating7").value);
    var i = parseFloat(document.getElementById("rating8").value);
    var j = parseFloat(document.getElementById("rating9").value);
    var total = a+b+c+d+e+f+g+h+i+j;
    alert("The Total is " + total);
    
}