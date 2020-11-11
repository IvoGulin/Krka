function izracunaj() 
{
	var x = Number(document.getElementById("visina").value);
	var y = Number(document.getElementById("tezina").value);
	var bmi = y / ((x/100)*(x/100));
	var bmiv = (bmi-25)*((x/100)*(x/100));
	var bmim = (20-bmi)*((x/100)*(x/100));
	if(bmi<20)
	{
		document.getElementById("rez").innerHTML = "Vi ste podhranjeni, morate nabiti mase i mišića";
		document.getElementById("ocjena").innerHTML = "Vaš manjak kila je: " + bmim.toFixed(2);
	}
	if(bmi>=20 && bmi<=25)
	{
		document.getElementById("rez").innerHTML = "Čestitamo, imate dobar odnos mase i visine";
		document.getElementById("ocjena").innerHTML = "Ne trebate dobiti niti gubiti kilograme";
	}
	if(bmi>25 && bmi<=30)
	{
		document.getElementById("rez").innerHTML = "Vi ste pretili, počnite se baviti nekim sportom na otvorenom";
		document.getElementById("ocjena").innerHTML = "Vaš višak kila je: " + bmiv.toFixed(2);
	}
	if(bmi>30)
	{
		document.getElementById("rez").innerHTML = "Vi ste pretili, morate hitno skidati masu šetajte u prirodi dnevno barem 1 ili 2 sata dnevno";
		document.getElementById("ocjena").innerHTML = "Vaš višak kila je: " + bmiv.toFixed(2);
	}
} 