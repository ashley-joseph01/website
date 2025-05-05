console.log("Initializing js | time.js")

function startTime() {
  const today = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Denver"}));
    let h = today.getHours();
    let m = today.getMinutes();
    // let s = today.getSeconds();
    m = checkTime(m);
    // s = checkTime(s);

    let ampm;
    console.log(h);
    if (h == 0) {
        ampm = "AM";
      h = 12;
    } else if (h == 12) {
        ampm = "PM";
    } else if (h > 12) {
        ampm = "PM";
      h = h - 12;
    } else {
        ampm = "AM";
    }
  
    document.getElementById('time').innerHTML = h + ":" + m + " " + ampm;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }