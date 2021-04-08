function opseg() 
{
	var a = Number(document.getElementById("var1").value);
	var b = Number(document.getElementById("var2").value);
	var c = Number(document.getElementById("var3").value);
	var o = 4*(a+b+c);
	document.getElementById("rez1").innerHTML = o;
} 
function povrsina() 
{
	var a = Number(document.getElementById("var1").value);
	var b = Number(document.getElementById("var2").value);
	var c = Number(document.getElementById("var3").value);
	var p = 2*(a*b+a*c+b*c);
	document.getElementById("rez2").innerHTML = p;
} 
function volumen() 
{
	var a = Number(document.getElementById("var1").value);
	var b = Number(document.getElementById("var2").value);
	var c = Number(document.getElementById("var3").value);
	var v = a*b*c;
	document.getElementById("rez3").innerHTML = v;
}


