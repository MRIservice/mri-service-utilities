 var cryoList = document.getElementById("cryoList");
 var newLhe = document.getElementById("newLhe");
 var year = document.getElementById("year");
 var yearValue = new Date().getFullYear();
	year.innerHTML = yearValue;

async function cryoCalc(){
	var response = await fetch("/cryo");
  	var json = await response.json();
  	var reversedcryo = json.cryo.reverse();
	var lastRecord = reversedcryo[0];
	var oldLhe = lastRecord.newLhe
	var oldDateEpoch = lastRecord.endDateEpoch
	var oldDate = lastRecord.endDate
	var endDateEpoch = Date.now();
	var endDate = new Date(endDateEpoch);
		endDate = endDate.toLocaleDateString('en-US');
		newLhe = newLhe.value

			if(newLhe < 0 || newLhe > 100) {
          		alert("Please enter value between 1 and 100")
        		} 	

		oldLhe = Math.round(oldLhe*100)/100;
		oldLhe = oldLhe.toFixed(2);
      		newLhe = Math.round(newLhe*100)/100;
		newLhe = newLhe.toFixed(2);
		

	var oneDay = 24*60*60*1000;
	var cryoDiff = Math.round((newLhe - oldLhe)*100)/100
	var days = Number(endDateEpoch - oldDateEpoch)/oneDay
	       days = Math.round(days *1000000)/1000000
	var boilRate = Math.round((cryoDiff/days)*10000)/10000
	       boilRate = boilRate.toFixed(3)

			if (boilRate>100){
    				boilRate = 100
  				}

  			if (boilRate<-100) {
    				boilRate = -100
 				 }

	var magData = { 
				endDate: endDate,
				endDateEpoch: endDateEpoch,
				newLhe: newLhe,
				oldDate: oldDate,
				oldDateEpoch: oldDateEpoch,
				oldLhe: oldLhe,
				cryoDiff: cryoDiff,
				boilRate : boilRate
  				};

  await fetch("/cryo", {
    	method: "POST",
    	headers: {
      	"Content-Type": "application/json"
    	},
    	body: JSON.stringify(magData)
  	});
  loadcryo();

	};

async function loadcryo() {
  	var response = await fetch("/cryo");
  	var json = await response.json();
  	var reversedcryo = json.cryo.reverse();
	
  for (var i in reversedcryo) {
    	var cryo = reversedcryo[i];
    	var li = document.createElement("li");
    	var contents = cryo.endDate +  "  "  + cryo.newLhe + "% lhe " + " | " + "  " + cryo.oldDate + "  " + cryo.oldLhe + "% lhe "  + " | "  + cryo.cryoDiff + "% diff " + " | "  +   "boil-off rate: "   + cryo.boilRate + "%/day";
   
    li.textContent = contents;
    cryoList.appendChild(li);
  }
}

window.onload = loadcryo;
