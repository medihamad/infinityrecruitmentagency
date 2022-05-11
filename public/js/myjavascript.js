
function views() {
    let element1 = document.getElementById("viewz");
    element1.style.borderBottom = "4px solid #6c757d";
}

function news() {
    let element2 = document.getElementById("newz");
    element2.style.borderBottom = "4px solid #6c757d";

    let element3 = document.getElementById("viewz");
    element3.style.border = "none";
}

function views1() {
    let element4 = document.getElementById("viewz");
    element4.style.borderBottom = "4px solid #6c757d";

    let element5 = document.getElementById("newz");
    element5.style.border = "none";
}

function hidenew() {
    let element4 = document.getElementById("new-persone");
    element4.style.display = "none";
}

function shownew() {
    let element4 = document.getElementById("new-persone");
    element4.style.display = "block";
}

//disabling married fields if candidate is single

let maritalstatus = document.querySelector('body');//selecting the body
maritalstatus.addEventListener("click", function(e){
   let ms= document.querySelector('#maritalStatus'); //selecting marital status dropdown
   let selectedValue= ms.options[ms.selectedIndex].value;//getting the value of the selected option
   if(selectedValue === "MARRIED"){
       document.getElementById('spouseSurname').removeAttribute('disabled');
       document.getElementById('spouseGivenName').removeAttribute('disabled');
       document.getElementById('maidenNames').removeAttribute('disabled');
       document.getElementById('dateOfMarriage').removeAttribute('disabled');
       document.getElementById('placeOfMarriage').removeAttribute('disabled');
       document.getElementById('dateicon').classList.remove('hidespecial');
   }
   else{
        document.getElementById('spouseSurname').setAttribute('disabled', "true");
        document.getElementById('spouseGivenName').setAttribute('disabled', "true");
        document.getElementById('maidenNames').setAttribute('disabled', "true");
        document.getElementById('dateOfMarriage').setAttribute('disabled', "true");
        document.getElementById('placeOfMarriage').setAttribute('disabled', "true");
        document.getElementById('dateicon').classList.add('hidespecial');
   }
})

setTimeout(() => {
      document.querySelector('.hidealert').style.opacity = "1";
//    //document.querySelector('.hidealert').style.display = "block";
      document.querySelector('.hidealert').style.transition = "opacity 1s";
//    document.querySelector('.hidealert').style.opacity = "3";
//    document.querySelector('.hidealert').style.transition = "opacity 3s";
}, 1000);

setTimeout(() => {
    document.querySelector('.hidealert').style.opacity = "0";
//    //document.querySelector('.hidealert').style.display = "block";
    document.querySelector('.hidealert').style.transition = "opacity 1s";
//    document.querySelector('.hidealert').style.opacity = "3";
//    document.querySelector('.hidealert').style.transition = "opacity 3s";
}, 3000);
