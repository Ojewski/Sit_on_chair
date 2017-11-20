document.addEventListener('DOMContentLoaded',function(){
// --------------- Gradient ------------------
  var deleteGradient = function() {
        var grad = this.querySelector(".gradient")
        if (grad) {
          grad.style.display="none";
        }
  }

  var addGradient = function() {
        var grad = this.querySelector(".gradient")
        if (grad) {
          grad.style.display="block";
        }
  };
//  ------------- Lista menu -----------------
  var openList = function() {
    // pobranie elementu jesli w liscie jest druga lista to wtedy dziala
        var firmMenu = this.querySelector("div.menu")
        if (firmMenu) {
          firmMenu.style.display="block";
          height = window.getComputedStyle(firmMenu, null).getPropertyValue("height");
          this.style.paddingBottom = height;
        }
  };

  var closeList = function(event) {
        var firmMenu = this.querySelector("div.menu")
        if (firmMenu) {
          firmMenu.style.display="none";
          this.style.paddingBottom = '10px';
        }
  };

//pobrannie elementow
var elemList = document.querySelectorAll(".list");
console.log(elemList);
// petla forEach
     elemList.forEach(function(element){
       //event mouseover
         element.addEventListener("mouseover", openList);
   });

// petla i event na opuszczenie elementu
   elemList.forEach(function(element){
       element.addEventListener("mouseout", closeList);
   });

   //BOX1 BOX2 chowanie gradientu
   var box1 = document.querySelectorAll(".box1, .box2");
   console.log(box1);

      box1.forEach(function(elemBox){
            elemBox.addEventListener("mouseover", deleteGradient);
      });

      box1.forEach(function(elemBox){
          elemBox.addEventListener("mouseout", addGradient);
      });


// -------------- Slider ------------------
var prev = document.querySelector('#prevPicture');
var next = document.querySelector('#nextPicture');

var sliderElems = document.querySelectorAll('.slider li');
var currentElem = 0;// zmienna do przechowywania informacji o aktualnym slide

console.log(prev, next, sliderElems, currentElem);
// ustalamy zeby aktualny slider byl widoczny
sliderElems[0].classList.add('visible');

next.addEventListener('click',function(){
    var current = document.querySelector('.slider .visible');
    current.classList.remove('visible');
    currentElem++;

    if(currentElem >= sliderElems.length){
      currentElem = 0;
      }

      sliderElems[ currentElem ].classList.add('visible');
    });

prev.addEventListener('click',function(){
    var current = document.querySelector('.slider .visible');
    // ukrycie obecnego slidera
    current.classList.remove('visible');
    currentElem--;
    if(currentElem<0){
        currentElem = sliderElems.length-1;
    }
    sliderElems[ currentElem ].classList.add('visible');

});

// ------------ Kalkulator ---------------------

// wyszukanie elementow html, strzałki do rozwijania list
var arrowList1 = document.querySelectorAll('.list_arrow')[0];
var arrowList2 = document.querySelectorAll('.list_arrow')[1];
var arrowList3 = document.querySelectorAll('.list_arrow')[2];
// ukryte panele z opcjami do wyboru
var panel1 = document.querySelectorAll('.list_panel')[0];
var panel2 = document.querySelectorAll('.list_panel')[1];
var panel3 = document.querySelectorAll('.list_panel')[2];
// opcje z panelów
// model
var clair = document.querySelector('.Clair');
var margarita = document.querySelector('.Margarita');
var selena = document.querySelector('.Selena');
// kolor
var red = document.querySelector('.red');
var black = document.querySelector('.black');
var orange = document.querySelector('.orange');
// obicie
var fabric = document.querySelector('.fabric');
var leather = document.querySelector('.leather');
// transport
var transport = document.querySelector('.transportCheck');


// wybrane elementy
var selectedModel = document.querySelector('.title');
var selectedColor = document.querySelector('.color');
var selectedFabric = document.querySelector('.pattern');
var selectedTransport = document.querySelector('.transport');
// cena poszczególnych elementów
var selectedModelPrice = document.querySelector('.title2');
var selectedColorPrice = document.querySelector('.color2');
var selectedFabricPrice = document.querySelector('.pattern2');
var selectedTransportPrice = document.querySelector('.transport2');
// suma
var sum = document.querySelector('.sum');

var price = priceModel + priceColor + pricePattern + priceTransport;

var priceModel = 0;
var priceColor = 0;
var pricePattern = 0;
var priceTransport = 0;


// ustawione czuwanie na klikniecie trojkata i naprzemienne ustawianie display(none / block)
arrowList1.addEventListener('click', function(chooseType){
     panel1.style.display = ((panel1.style.display!='none' && panel1.style.display) ? 'none' : 'block');
});

arrowList2.addEventListener('click', function(chooseType){
    panel2.style.display = ((panel2.style.display!='none' && panel2.style.display) ? 'none' : 'block');
});

arrowList3.addEventListener('click', function(chooseType){
    panel3.style.display = ((panel3.style.display!='none' && panel3.style.display) ? 'none' : 'block');
});

// wybór modelu i wpisanie go po prawo wraz z cena
clair.addEventListener('click', function(model){
    selectedModel.innerText = "Clair";
    selectedModelPrice.innerText = 479;
    panel1.style.display = "none";
    priceModel = 479;
    price = priceModel + priceColor + pricePattern + priceTransport;
    sum.innerText = price;
});

margarita.addEventListener('click', function(model){
    selectedModel.innerText = "Margarita";
    selectedModelPrice.innerText = 599;
    panel1.style.display = "none";
    priceModel = 599;
    price = priceModel + priceColor + pricePattern + priceTransport;
    sum.innerText = price;
});

selena.addEventListener('click', function(model){
    selectedModel.innerText = "Selena";
    selectedModelPrice.innerText = 749;
    panel1.style.display = "none";
    priceModel = 749;
    price = priceModel + priceColor + pricePattern + priceTransport;
    sum.innerText = price;
});
// wybor koloru
red.addEventListener('click', function(color){
    selectedColor.innerText = "czerwony";
    selectedColorPrice.innerText = 119;
    panel2.style.display = "none";
    priceColor = 119;
    price = priceModel + priceColor + pricePattern + priceTransport;
    sum.innerText = price;
});

black.addEventListener('click', function(color){
    selectedColor.innerText = "czarny";
    selectedColorPrice.innerText = 99;
    panel2.style.display = "none";
    priceColor = 99;
    price = priceModel + priceColor + pricePattern + priceTransport;
    sum.innerText = price;
});

orange.addEventListener('click', function(color){
    selectedColor.innerText = "pomarańczowy";
    selectedColorPrice.innerText = 109;
    panel2.style.display = "none";
    priceColor = 109;
    price = priceModel + priceColor + pricePattern + priceTransport;
    sum.innerText = price;
});

// wybor materialu
fabric.addEventListener('click', function(material){
    selectedFabric.innerText = "tkanina";
    selectedFabricPrice.innerText = 89;
    panel3.style.display = "none";
    pricePattern = 89;
    price = priceModel + priceColor + pricePattern + priceTransport;
    sum.innerText = price;
});

leather.addEventListener('click', function(material){
    selectedFabric.innerText = "skóra";
    selectedFabricPrice.innerText = 159;
    panel3.style.display = "none";
    pricePattern = 159;
    price = priceModel + priceColor + pricePattern + priceTransport;
    sum.innerText = price;

});

// ------- transport ------

transport.addEventListener('change', function(){
    if (transport.checked == true) {
        selectedTransport.innerText = "transport";
        selectedTransportPrice.innerText = 39;
        priceTransport = 39;
        price = priceModel + priceColor + pricePattern + priceTransport;
        sum.innerText = price;
    } else {
        selectedTransport.innerText = "";
        selectedTransportPrice.innerText = "";
        priceTransport = "";
        price = priceModel + priceColor + pricePattern + priceTransport;
        sum.innerText = price;
    }
});

});
