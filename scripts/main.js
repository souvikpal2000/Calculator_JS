/*function calc()
{
	var no1 = parseInt(document.querySelector("#val1").value);
	var no2 = parseInt(document.querySelector("#val2").value);
	var op = document.querySelector("#operator").value;
	var calculate;
	if(op=="add")
	{
		calculate = no1 + no2;
	}
	else if(op=="sub")
	{
		calculate = no1 - no2;
	}
	else if(op=="mul")
	{
		calculate = no1 * no2;
	}
	else if(op=="div")
	{
		calculate = no1/no2;
	}
	console.log(calculate);
	document.querySelector("#result").innerHTML = calculate;
}*/
function printHistory(num)
{
	document.getElementById("history-value").innerHTML = num;
}
function getHistory()
{
	return document.getElementById("history-value").innerHTML;
}
function printOutput(num)
{
	if(num=="")
	{
		document.getElementById("output-value").innerHTML = num;
	}
	else
	{
		var no = getFormattedNumber(num);
		document.getElementById("output-value").innerHTML = no;
	}
}
function getOutput()
{
	return document.getElementById("output-value").innerHTML;
}
function getFormattedNumber(num)
{
	if(num=="-")
	{
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num)
{
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
var i;
for(i=0;i<operator.length;i++)
{
	operator[i].addEventListener('click',function()
	{
		/*alert("The operator clicked : "+this.id);*/
		if(this.id=="clear")
		{
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace")
		{
			var no = getOutput();
			var no1 = reverseNumberFormat(no);
			var output = no1.toString();
			output = output.substr(0,output.length-1);
			printOutput(output);
		}
		else
		{
			var output = getOutput();
			var history = getHistory();
			if(output=="" && history!="")
			{
				if(isNaN(history[history.length-1]))
				{
					history = history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!="")
			{
				output = output==""?output:reverseNumberFormat(output);
  				history = history + output;
  				if(this.id=="=")
  				{
  					var result = eval(history);
  					printOutput(result);
  					printHistory("");
  				}
  				else
  				{
  					history = history + this.id;
  					printHistory(history);
  					printOutput("");
  				}
			}
		}
	})
}
var number = document.getElementsByClassName("number");
for(i=0;i<number.length;i++)
{
	number[i].addEventListener('click',function()
	{
		/*alert("The Number clicked : "+this.id);*/
		var no = getOutput();
		var output = reverseNumberFormat(no);
		if(output!=NaN) //Output must be a Number
		{
			output = output.toString();
			output = output + this.id;
			printOutput(output);
		}
	})
}
