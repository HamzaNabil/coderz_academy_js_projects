// Setup vars
var myInput = document.querySelector("#myInput");
var myButton = document.querySelector("#btn");

// Events 
myButton.addEventListener('click', togglePassword);

// Function  
function togglePassword() {
    if(myButton.getAttribute('data-text') == "show") {
        myInput.setAttribute('type', 'text');
        myButton.setAttribute('data-text', 'hide');
        myButton.innerHTML = "Hide";
    } else {
        myInput.setAttribute('type', 'password');
        myButton.setAttribute('data-text', 'show');
        myButton.innerHTML = "Show";
    }
}

// Button = show  => password => text  Show => Hide  => hide
// Button = hide  => text => password Hide => Show  => show 