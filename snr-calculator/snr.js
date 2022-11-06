	var signal = document.getElementById("signal")
	var noise = document.getElementById("noise")
	var SNR = document.getElementById("snr")

	function snr(nex) {
  		var signalValue = Number(signal.value)
  		var noiseValue = Number(noise.value)
  		var snrValue = Math.round(Math.sqrt(nex) * signalValue/noiseValue)
  
  		if (snrValue>90){
    			SNR.className='green'
  			}
  		if (snrValue<75) {
    			SNR.className='red'
  			}
   
  		if (snrValue>75 && snrValue <90){
    			SNR.className='blue'
  			}
  
  		SNR.innerHTML = snrValue
    
  		}
