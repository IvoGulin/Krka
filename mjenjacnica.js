function euro() 
{
	var k = Number(document.getElementById("kune").value);
	var e = k / 7.549562;
	document.getElementById("rez").innerHTML = e.toFixed(2);
} 
function dolar() 
{
	var k = Number(document.getElementById("kune").value);
	var e = k / 6.354850;
	document.getElementById("rez").innerHTML = e.toFixed(2);
} 
function funta() 
{
	var k = Number(document.getElementById("kune").value);
	var e = k / 8.354982;
	document.getElementById("rez").innerHTML = e.toFixed(2);
} 
function jen() 
{
	var k = Number(document.getElementById("kune").value);
	var e = (k / 6.130379)*100;
	document.getElementById("rez").innerHTML = e.toFixed(2);
}
function marka() 
{
	var k = Number(document.getElementById("kune").value);
	var e = k / 3.860030;
	document.getElementById("rez").innerHTML = e.toFixed(2);
} 
function cad() 
{
	var k = Number(document.getElementById("kune").value);
	var e = k / 4.883603;
	document.getElementById("rez").innerHTML = e.toFixed(2);
} 
function forinta() 
{
	var k = Number(document.getElementById("kune").value);
	var e = (k / 2.103645)*100;
	document.getElementById("rez").innerHTML = e.toFixed(2);
}
function zlot() 
{
	var k = Number(document.getElementById("kune").value);
	var e = k / 1.685546;
	document.getElementById("rez").innerHTML = e.toFixed(2);
} 