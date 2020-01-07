// JS DOM
var paragraph = document.createElement("h1");
var teksts = document.createTextNode("Introduction ");
paragraph.appendChild(teksts);
var element = document.getElementById("JSDOM");
element.appendChild(paragraph);
// 1.funkcija daudzuma aprēķināšanai
function reizinasanadaudzums1(){
  var x1=document.getElementById("daudzums1").value;
  if (x1.length===0 || isNaN(x1)){
    document.getElementById("kluda").innerHTML="Please input a number";
  }
  else{
    if (x1>4 && x1<10000000){
      document.getElementById("pirmaisdaudzums").innerHTML=x1;
      document.getElementById("sviests1").innerHTML=15*x1+"g";
      document.getElementById("cukursbruns1").innerHTML=Math.round(14.67*x1)+"g";
      document.getElementById("cukursbalts1").innerHTML=Math.round(13.33*x1)+"g";
      document.getElementById("olas1").innerHTML=Math.round(0.13*x1);
      document.getElementById("vanila1").innerHTML=Math.round(0.1*x1);
      document.getElementById("vanila11").innerHTML="("+Math.round(0.5*x1)+"g)";
      document.getElementById("milti1").innerHTML=Math.round(20.83*x1)+"g";
      document.getElementById("powder1").innerHTML=Math.round(0.067*x1);
      document.getElementById("powder11").innerHTML="("+Math.round(0.33*x1)+"g)";
      document.getElementById("chips1").innerHTML=Math.round(23.33*x1)+"g";
      document.getElementById("kluda").innerHTML="";
    }
    else if(x1<=4){
      document.getElementById("kluda").innerHTML="The amount of cookies is too small";
  }
    else if (x1=>10000000){
      document.getElementById("kluda").innerHTML="The amount of cookies is too big";
  }
}
}
//2.Funkcija daudzuma aprēķināšanai
function reizinasanadaudzums2(){
  var x2=document.getElementById("daudzums2").value;
  if (x2.length===0 || isNaN(x2)){
    document.getElementById("kluda2").innerHTML="Please input a number";
  }
  else{
    if (x2>=10 && x2<10000000){
      document.getElementById("otraisdaudzums").innerHTML=x2;
      document.getElementById("sviests2").innerHTML=Math.round(12.5*x2)+"g";
      document.getElementById("cukursbalts2").innerHTML=Math.round(5.55*x2)+"g";
      document.getElementById("citrons2").innerHTML=Math.round(0.055*x2);
      document.getElementById("teja2").innerHTML=Math.round(0.055*x2);
      document.getElementById("teja22").innerHTML="("+Math.round(0.277*x2)+"g)";
      document.getElementById("milti2").innerHTML=Math.round(17.78*x2)+"g";
      document.getElementById("kluda2").innerHTML="";

    }
    else if(x2<10){
      document.getElementById("kluda2").innerHTML="The amount of cookies is too small";
  }
    else if (x2=>10000000){
      document.getElementById("kluda2").innerHTML="The amount of cookies is too big";
  }
}
}
//3.Funkcija daudzuma aprēķināšanai
function reizinasanadaudzums3(){
  var x3=document.getElementById("daudzums3").value;
  if (x3.length===0 || isNaN(x3)){
    document.getElementById("kluda3").innerHTML="Please input a number";
  }
  else{
    if (x3>7 && x3<10000000){
      document.getElementById("tresaisdaudzums").innerHTML=x3;
      document.getElementById("avenes3").innerHTML=Math.round(8.92*x3)+"g";
      document.getElementById("cukursbalts3").innerHTML=Math.round(7.14*x3)+"g";
      document.getElementById("citronusula3").innerHTML=Math.round(0.21*x3);
      document.getElementById("citronusula33").innerHTML=Math.round(1.07*x3)+"g";
      document.getElementById("milti3").innerHTML=Math.round(8.92*x3)+"g";
      document.getElementById("mandelumilti3").innerHTML=Math.round(8.42*x3)+"g";
      document.getElementById("sviests3").innerHTML=Math.round(7.14*x3)+"g";
      document.getElementById("sviests33").innerHTML=Math.round(2*x3)+"g";
      document.getElementById("cukursbalts33").innerHTML=Math.round(7.14*x3)+"g";
      document.getElementById("ekstrakts3").innerHTML=Math.round(0.07*x3);
      document.getElementById("ekstrakts33").innerHTML="("+Math.round(0.36*x3)+"g)";
      document.getElementById("seklas3").innerHTML=Math.round(0.64*x3);
      document.getElementById("seklas33").innerHTML="("+Math.round(3.21*x3)+"g)";
      document.getElementById("olas3").innerHTML=Math.round(0.07*x3);





    }
    else if(x3<=7){
      document.getElementById("kluda3").innerHTML="The amount of cookies is too small";
  }
    else if (x3=>10000000){
      document.getElementById("kluda3").innerHTML="The amount of cookies is too big";
  }
}
}

function add_content() {
    document.getElementById("papildusinfo").style.display='block';
    alert(add_content());
};
//jquery
$(function(){
  $(".ievads").hide(1).show(600);
})
$(document).ready(function(){
  $('a[href^="#"]').on('click',function(e){
    e.preventDefault  (); // nodrošina, ka nenostrādās noklusējuma darbība
    var target=this.hash; // referencē noklikšķināto elementu
    var $target =$(target); // ļauj lietot jquery ar to elementu

    $('html,body').animate({
      'scrollTop': $target.offset().top
    },1000, 'swing', function(){
      window.location.hash = target;
    });
    });
  });
  // Formas sūtīšana
  document.addEventListener("DOMContentLoaded", function() {
      document.getElementsByTagName('ievadesforma')[0].addEventListener('submit', (event) => {
        event.preventDefault(); // novērš noklusējuma sūtījumu
      // pārbauda vai dati ir pareizi
        // TODO do something here to show user that form is being submitted
        fetch(event.target.action, {
          method: 'POST',
          body: new URLSearchParams(new FormData(event.target)) // event.target ir forma
        }).then((resp) =>  {
          console.log(resp.json());
          return resp.json(); // atgriež to , ko serveris sūta
        }).then((body) => {
          console.log(body);
        }).catch((error) => {
          console.log(error);
          //izpilda darbību , ja ir kļūda
          console.log()
        });
      });
    })
