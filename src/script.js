function generateOTP() {
    let digits = "0123456789";
    let OTP = '';
     
    for(let i = 0; i< 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
     }
      let button = document.querySelector('.container span');
      button.innerHTML = OTP;
    
      const STARTING_MINUTES = 10;
      let time = STARTING_MINUTES * 60;
      
      const COUNT_DOWN_EL = document.getElementById('countdown');
    
      setInterval(updateCountdown, 1000);
    
      function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        COUNT_DOWN_EL.innerHTML = `${minutes}:${seconds}`;
        time--;
      }
         }

   setTimeout(function() {
    window.location.reload(1);
  }, 600000); //10 minutos
  
  
  