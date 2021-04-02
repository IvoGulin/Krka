function opseg() 
{
	var x = Number(document.getElementById("var1").value);
	var o = 3*x;
	document.getElementById("rez1").innerHTML = o;
}
function povrsina() 
{
	var x = Number(document.getElementById("var1").value);
	var p = x*x*1.73/4;
	document.getElementById("rez2").innerHTML = p;
} 
