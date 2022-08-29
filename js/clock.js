function showTime() {

  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = checkTime(h);

  var gunler = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let day = gunler[today.getDay()];
  document.getElementById("myClock").innerHTML =
    h + ":" + m + ":" + s + "     " + day;
  setTimeout(showTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } 
  return i;
}

function getName(){
    let name = prompt("Adınız nedir?")
    document.getElementById("myName").innerHTML = name + " "
    showTime()
}