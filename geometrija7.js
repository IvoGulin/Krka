function povrsina() 
{
	var x = Number(document.getElementById("var1").value);
	var p = 4*x*x*3.14;
	document.getElementById("rez1").innerHTML = p;
}
function volumen() 
{
	var x = Number(document.getElementById("var1").value);
	var v = 4/3*3.14*x*x*x;
	document.getElementById("rez2").innerHTML = v;
} 
