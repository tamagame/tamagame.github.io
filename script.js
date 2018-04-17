var canvas2 = document.getElementById('canvas2');
var ctx1 = canvas2.getContext('2d');

var correct = new Audio();
correct.src="correct.mp3";
var wrong = new Audio();
wrong.src = "milena_wrong_answer.mp3";
var gameover = new Audio();
gameover.src = "game_over.mp3";
var musik = new Audio();
musik.src = "happy.mp3"


var bg = document.getElementById('bg');
var ctx5 = bg.getContext('2d');

var mouseX,mouseY;

var timeleft = 60;
var minute = 4;
var nyawa = 3;
var a = 0, b = 0, c = 0;
var klik = 0;
var benar = 0;
var tulisan = ['','','','','','','','','',''];
var hasil1 = 0;

function tujuh(){
  tulisan[klik] = '7';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function delapan(){
  tulisan[klik] = '8';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function sembilan(){
  tulisan[klik] = '9';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function empat(){
  tulisan[klik] = '4';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function lima(){
  tulisan[klik] = '5';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function enam(){
  tulisan[klik] = '6';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function satu(){
  tulisan[klik] = '1';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function dua(){
  tulisan[klik] = '2';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function tiga(){
  tulisan[klik] = '3';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function nol(){
  tulisan[klik] = '0';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function minus(){
  tulisan[klik] = '-';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function koma(){
  tulisan[klik] = '.';
  klik++;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function del(){
  if(klik>0){
    klik--;
    tulisan[klik] = '';
    document.getElementById('jwb').innerHTML = tulisan.join("");
  }
  else{
    document.getElementById('jwb').innerHTML = tulisan.join("");
  }
  
}
function hapus(){
  for(var i = 0 ; i < klik ; i ++){
    tulisan[i] = '';
  }
  klik = 0;
  document.getElementById('jwb').innerHTML = tulisan.join("");
}
function enter(){
  var r = Math.floor(Math.random()*11)+1;
  var angka = tulisan[0]+tulisan[1]+tulisan[2]+tulisan[3]+tulisan[4]+tulisan[5]+tulisan[6]+tulisan[7]+tulisan[8]+tulisan[9];
  // var hasil = parseInt(angka);
  var hasil = parseFloat(angka);
  if(hasil == hasil1){
    bnr();
    if(r==1){
      soal1();
    }
    else if(r==2){
      soal2();
    }
    else if(r==3){
      soal3();
    }
    else if(r==4){
      soal4();
    }
    else if(r==5){
      soal5();
    }
    else if(r==6){
      soal6();
    }
    else if(r==7){
      soal7();
    }
    else if(r==8){
      soal8();
    }
    else if(r==9){
      soal9();
    }
    else if(r==10){
      soal10();
    }
    else if(r==11){
      soal11();
    }
  }
  else{
    nyawa--;
    slh();
  }
  document.getElementById('jwb').innerHTML = tulisan.join("");
}

function bnr(){
  benar++;
  correct.play();
  document.getElementById('bnr').innerHTML = benar;
  hapus();
}
function slh(){
  wrong.play();
  if(nyawa==3){
    hapus();
    hati3();
  }
  else if(nyawa==2){
    hapus();
    hati2();
  }
  else if(nyawa==1){
    hapus();
    hati1();
  }
  else if(nyawa==0){
    document.getElementById('nyw').innerHTML = '';
    musik.pause();
    wrong.pause();
    gameover.play();
    alert("Game Over" + " Poin Anda " + benar);
    window.location = 'index.html';
  }
}
function hati1(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("nyw").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "1.txt", true);
xhttp.send();
}
function hati2(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("nyw").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "2.txt", true);
xhttp.send();
}
function hati3(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("nyw").innerHTML =
    this.responseText;
  }
};
xhttp.open("GET", "3.txt", true);
xhttp.send();
}

function soal1(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  hasil1 = a + b;
  document.getElementById('soal').innerHTML = a + " + " + b + " = ";
}
function soal2(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  c = Math.floor(Math.random()*10)+1;
  hasil1 = a + b + c;
  document.getElementById('soal').innerHTML = a + "+" + b + "+" + c + "=";
}
function soal3(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  hasil1 = a * b;
  document.getElementById('soal').innerHTML = a + " x " + b + " = ";
}
function soal4(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  c = Math.floor(Math.random()*10)+1;
  hasil1 = a * b + c;
  document.getElementById('soal').innerHTML = a + "x" + b + "+" + c + "=";
}
function soal5(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  hasil1 = a - b;
  document.getElementById('soal').innerHTML = a + " - " + b + " = ";
}
function soal6(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  c = Math.floor(Math.random()*10)+1;
  hasil1 = a + b - c;
  document.getElementById('soal').innerHTML = a + "+" + b + "-" + c + "=";
}
function soal7(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  c = Math.floor(Math.random()*10)+1;
  hasil1 = a - b + c;
  document.getElementById('soal').innerHTML = a + "-" + b + "+" + c + "=";
}
function soal8(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  c = Math.floor(Math.random()*10)+1;
  hasil1 = a + b * c;
  document.getElementById('soal').innerHTML = a + "+" + b + "x" + c + "=";
}
function soal9(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  hasil1 = (a/b).toFixed(1);
  document.getElementById('soal').innerHTML = a + " : " + b + " = ";

}
function soal10(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  c = Math.floor(Math.random()*10)+1;
  hasil1 = a-b*c;
  document.getElementById('soal').innerHTML = a + "-" + b + "x" + c + "=";
}
function soal11(){
  a = Math.floor(Math.random()*10)+1;
  b = Math.floor(Math.random()*10)+1;
  c = Math.floor(Math.random()*10)+1;
  hasil1 = a * b - c;
  document.getElementById('soal').innerHTML = a + "x" + b + "-" + c + "=";
}



function timer(){
  var downloadTimer = setInterval(function(){
  timeleft--;
  if(minute<0){
    musik.pause();
    gameover.play()
    alert("Game Over" + " Poin Anda " + benar);
    window.location = 'index.html';
  }
  document.getElementById("time").textContent = minute + ":" + timeleft;
    if(timeleft == 0){
      minute--;
      timeleft = 60;
    }
  },1000);
}



function mulai(){
  timer();
  musik.loop = true;
  musik.play()

  var r = Math.floor(Math.random()*11)+1;
    if(r==1){
      soal1();
    }
    else if(r==2){
      soal2();
    }
    else if(r==3){
      soal3();
    }
    else if(r==4){
      soal4();
    }
    else if(r==5){
      soal5();
    }
    else if(r==6){
   soal6();
    }
    else if(r==7){
      soal7();
    }
    else if(r==8){
      soal8();
    }
    else if(r==9){
      soal9();
    }
    else if(r==10){
      soal10();
    }
    else if(r==11){
      soal11();
    }

  ctx1.canvas.addEventListener('click',function(event){
    mouseX = event.clientX - ctx1.canvas.offsetLeft;
    mouseY = event.clientY - ctx1.canvas.offsetTop;
    if(mouseX < 100 && mouseY < 70){
      tujuh();
    }
    else if(mouseX < 200 && mouseY < 70){
      delapan();
    }
    else if(mouseX < 300 && mouseY < 70){
      sembilan();
    }
    else if(mouseX < 100 && mouseY < 139){
      empat();
    }
    else if(mouseX < 200 && mouseY < 139){
      lima();
    }
    else if(mouseX < 300 && mouseY < 139){
      enam();
    }
    else if(mouseX < 100 && mouseY < 209){
      satu();
    }
    else if(mouseX < 200 && mouseY < 209){
      dua();
    }
    else if(mouseX < 300 && mouseY < 209){
      tiga();
    }
    else if(mouseX < 100 && mouseY < 275){
      minus();
    }
    else if(mouseX < 200 && mouseY < 275){
      nol();
    }
    else if(mouseX < 300 && mouseY < 275){
      koma();
    }
    else if(mouseX < 100 && mouseY < 345){
      del();
    }
    else if(mouseX < 200 && mouseY < 345){
      enter();
    }
    else if(mouseX < 300 && mouseY < 345){
      hapus();
    }
  });

  document.getElementById('bnr').innerHTML = benar;
  hati3();
}
