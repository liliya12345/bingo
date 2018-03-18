var arr = [];
var count2 = 0;
function rand() {
    var rand = arr;
    while (count2 < 2) {
    for (var i = 0; i < 2; i++) {
        arr.push(Math.round(Math.random() * 9));
        count2++;
    }
    }
    listItem1.innerHTML = arr.join(" ");

}
var count = 0;
var array = [];
function val() {
    soundClick();
    full();
    while (count < 2) {
        var val = document.getElementById("value").value;
        
        if ( val > 10) {
            alert("talet måste vara från 0 till 9");
        }
        else if ( /[^[0-9]/.test(val)|| val=="") {
            alert("fel format!");
        
        }
        else {
            array.push(val);
            count++;
            value.value= "";
            
        }
        console.log(count);
        listItem.innerHTML = array.join(" ");
        listItem3.innerHTML = array.join(" ");
        return;
       
    }
    


}
function full() {

    if (array.length == 2)
        alert("Array är full!");
    return false;



}
var count1 = 0;
function bingo() {
    rand();
    for (var j = 0; j < array.length; j++) {
        if (arr[j] == array[j]) {
            count1++;
            continue;
        }
    }
    listItem2.innerHTML = count1 + (" poäng");
    if (count1 == 2) {
        listItem2.innerHTML = (" Bingo!");
    }
}

function soundClick() {
    var audio = new Audio();
    audio.src = 'audio/1.mp3';
    audio.play();
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function start() {

    bingo();
    modal.style.display = "block";


}
span.onclick = function () {

    modal.style.display = "none";
}

