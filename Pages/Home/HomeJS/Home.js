function setCookie(cbox,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cbox + "=" + cvalue + ";" + expires + ";path=/";
  location.reload();
}

function getCookie(cbox)
{
  var box = cbox + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(box) == 0) {
      return c.substring(box.length, c.length);
    }
  }
  return "";
}

function checkCookie()
{
  var user=getCookie("userbox");
  if (user != "") {
    alert("Welcome again " + user);
  }
  else {
     user = prompt("Please enter your box:","");

     if (user != "" && user != null) {
       setCookie("userbox", user, 30);
       document.getElementById("third").innerHTML = "Hey " + user + ", what car is available for you today?" ;
     }
       show();
  }
}

function show(){
	var box = document.getElementById("box");
	box.style.visibility = 'visible';
	var side = document.getElementById("side");
	side.style.visibility = 'visible';
	var numCount = document.getElementById("progressBar");
	numCount.style.visibility = 'visible';
}

function showbox(){
	var image = document.getElementById("image");
	image.style.visibility = 'visible';
	$(image).fadeIn("60");
}

var timeleft = 10;
var downloadTimer = setInterval(function(){
if(timeleft <= 0){
    clearInterval(downloadTimer);
    alert("Game Over, you run out of time.");
    if (confirm("Ready for a New Game?")){
      window.location.reload()
    }
}


document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);

function newgame(){
  window.location.reload();
}
