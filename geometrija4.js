function opseg() 
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var z = 2*(x+y);
	document.getElementById("rez1").innerHTML = z;
}
function povrsina() 
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var z = x*y;
	document.getElementById("rez2").innerHTML = z;
} 
