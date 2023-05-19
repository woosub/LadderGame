var filter = "win16|win32|win64|mac|macintel"; 
if(navigator.platform){ 
  if(filter.indexOf( navigator.platform.toLowerCase() ) < 0 ){
    location.href = "http://cheerup31.com/index_m.html";
  }
}      

function fnMove(seq){
    var offset = $("#event" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}

$(document).ready(function(){

  $('#btn1').on('click', function(){window.open('https://apply.jobaba.net/bsns/bsnsDetailView.do?bsnsSeq=2283');});
  $('#btn2').on('click', function(){window.open('https://youth.gg.go.kr/gg/index.do');});
  $('#btn3').on('click', function(){window.open('https://youth.gg.go.kr/gg/index.do');});
  $('#btn4').on('click', function(){window.open('https://apply.jobaba.net/bsns/bsnsDetailView.do?bsnsSeq=2260');});
  $('#btn5').on('click', function(){window.open('https://apply.jobaba.net/special/GGtestfees/main.do');});
  $('#btn6').on('click', function(){fnMove('1');});
  $('#btn7').on('click', function(){fnMove('3');});
  $('#btn8').on('click', function(){fnMove('5');});
  $('#btn9').on('click', function(){fnMove('4');});
  $('#btn10').on('click', function(){fnMove('2');});
  
});