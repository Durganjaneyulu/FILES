function convert() 
{
      var degrees = parseFloat(document.getElementById("D").value);
      var type = document.getElementById("type").value;
      var result = document.getElementById("result");
      
      if (type === "c") 
	  {
        var convertedTemp = (degrees * 9/5) + 32;
        result.innerHTML = degrees + "&#8451;= " + convertedTemp + "&#8457;";
      } 
	  else if (type === "f") 
	  {
        var convertedTemp = (degrees - 32) * 5/9;
        result.innerHTML = degrees + "&#8457; = " + convertedTemp + "&#8451;";
      }
 }