	var cf = document.getElementById("cf")
	var fov = document.getElementById("fov")
	var zipper = document.getElementById("zipper")
	var position = document.getElementById("position")
 
	function lip() {
  			var cfValue = cf.value
			    cfValue = +cfValue
		alert("TS message -- what the Heck")

  			var fovValue = fov.value
		            fovValue = +fovValue
  			var positionValue = position.value
			    positionValue = +positionValue
  			var offset = Math.round((positionValue/fovValue) * 1600)
		            offset = +offset
			var zipperLoc = cfValue - offset
  
  				zipper.innerHTML = zipperLoc
			}


	function sar() {
                        var cfValue = Number(cf.value)
                        var fovValue = Number(fov.value)
                        var positionValue = position.value
                        var offset = Math.round((positionValue/fovValue) * 1600) 
                        var zipperLoc = Number(cfValue + offset)
  
                                zipper.innerHTML = zipperLoc
                        }
