var xmlhttp

function showMatch()
{  
   xmlhttp = GetXmlHttpObject();
   
   if (xmlhttp == null)
   {
      alert ("Your browser does not support XMLHTTP!");
      return;
   }
	   
   // Backend handler - response software component
   var url = "http://localhost:8080/HackMatch/matchServlet";

   url = url + "?sid=" + Math.random();
   
   // How to configure XMLHttpRequest object?
   // Register the callback function named "stateChanged"
   xmlhttp.onreadystatechange = stateChanged;

   // How to make an asynchronous request?
   xmlhttp.open("GET", url, true);
   
   // How to send the request to the server?
   xmlhttp.send();
   
}

function stateChanged()
{
	// The callback function processes the response from the server	
   if (xmlhttp.readyState == 4)
   { 
	  // Update the HTML DOM
      document.getElementById ("txtHint").innerHTML = xmlhttp.responseText;
   }
}

function GetXmlHttpObject()
{
	// How to create an XMLHttpRequest object?
	// 1. create XMLHttpRequest object
	
	// modern browser
	if (window.XMLHttpRequest) 
	{
		return new XMLHttpRequest();
	}
	
	// older browser
	if (window.ActiveXobject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	return null;
}
