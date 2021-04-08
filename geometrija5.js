function opseg() 
{
	var x = Number(document.getElementById("var1").value);
	var o = 12*x;
	document.getElementById("rez1").innerHTML = o;
} 
function povrsina() 
{
	var x = Number(document.getElementById("var1").value);
	var p = 6*x*x;
	document.getElementById("rez2").innerHTML = p;
} 
function volumen() 
{
	var x = Number(document.getElementById("var1").value);
	var v = x*x*x;
	document.getElementById("rez3").innerHTML = v;
}


