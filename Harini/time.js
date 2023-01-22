var stopwatch = document.getElementById("stopwatch");
      var startBtn = document.getElementById("start-btn");
      var timeoutId = null;
      var ms = 0;
      var sec = 0;
      var min = 0;
      /* function to start stopwatch */
      function start(flag) {
        if (flag) {
          startBtn.disabled = true;
        }
        timeoutId = setTimeout(function() {
          ms = parseInt(ms);
          sec = parseInt(sec);
          min = parseInt(min);
          ms++;
          if (ms == 100) {
            sec = sec + 1;
            ms = 0;
          }
          if (sec == 60) {
            min = min + 1;
            sec = 0;
          }
          if (ms < 10) {
            ms = '0' + ms;
          }
          if (sec < 10) {
            sec = '0' + sec;
          }
          if (min < 10) {
            min = '0' + min;
          }
          stopwatch.innerHTML = min + ':' + sec + ':' + ms;
          // calling start() function recursivly to continue stopwatch
          start();
        }
                               , 10);
        // setTimeout delay time 10 milliseconds
      }
      /* function to pause stopwatch */
      function pause() {
        clearTimeout(timeoutId);
        startBtn.disabled = false;
      }
      /* function to reset stopwatch */
      function reset() {
        ms = 0;
        sec = 0;
        min = 0;
        clearTimeout(timeoutId);
        stopwatch.innerHTML = '00:00:00';
        startBtn.disabled = false;
      }
/*var c = 1;
function counting(){
    console.log(c);
    c++;
}
//setInterval(counting,1000);
var a = setInterval(counting,1000);
clearInterval(a);
setTimeout(counting,2000);
var a = setInterval(counting,1000);
function start(){
    document.getElementById("result").innerHTML = a;
}
function stop(){
    document.getElementById("result").innerHTML = clearInterval(a);
}*/
