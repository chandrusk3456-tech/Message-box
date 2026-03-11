// selecting elements
var textarea = document.getElementById("message");
var counter = document.getElementById("counter");
var warning = document.getElementById("warning");

// maximum characters
var maxLength = 200;


// event listener
textarea.addEventListener("input", function () {

    var typedCharacters = textarea.value.length;
    var remaining = maxLength - typedCharacters;
    counter.textContent = typedCharacters + " / " + maxLength + " characters";


    // warning if limit reached
    if (typedCharacters === maxLength) {
        warning.textContent = "Character limit reached!";
    } 
    else {
        warning.textContent = "";
    }

});