	var boilRate = document.getElementById("boilRate")
	var nextFill = document.getElementById("nextFill")
	var fillPoint = document.getElementById("fillPoint")
	var currentLhe = document.getElementById("currentLhe")
	var previousLhe = document.getElementById("previousLhe")
	var previousDate = document.getElementById("previousDate")

		function cryoCalc() {
  			var oneDay = 24*60*60*1000;
  			var endDate = Date.now(); 
  			var cryoDiff = previousLhe.value - currentLhe.value;  
  			var beginningDate = new Date(previousDate.value).getTime();    
  			var days = Math.round(Number(endDate-beginningDate)/oneDay)
  
  			var boilRateValue = Math.round((cryoDiff/days)*1000)/1000
      			boilRate.innerHTML = boilRateValue + " %/day"
  			var nextFilldate = new Date(endDate + Math.round((currentLhe.value - fillPoint.value)/boilRateValue)*oneDay).toDateString();
      			nextFill.innerHTML = nextFilldate  
			}
