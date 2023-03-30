
console.log('hello world');
const email = document.getElementById("email-input");
const error = document.getElementById("error-div");
const buttonSubmit = document.getElementById("submit-email");
const red = document.getElementById("red_circle");
const border = document.getElementById("border_red");

let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function tsmail(input) {

    if (mailRegex.test(input.value)) {
        console.log("this is true");
        error.style.display = "none";
        red.style.height = "0";

    } else if (!mailRegex.test(input.value)) {
        console.log('this is false');
        error.style.display = "block";
        red.style.height = "24px";
        border.style.border = '2px solid #F96464';
        buttonSubmit.style.background = 'linear-gradient(135deg, #F8BFBF 0%, #EE8B8B 100%)';
        buttonSubmit.style.opacity = '0.5';
    }
}

buttonSubmit.addEventListener ('click', (event) => {
    // event.preventDefault(); 
    tsmail(email);
    console.log("clicked");
})

email.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    //   event.preventDefault();
      tsmail(email);
      console.log("clicked");
    }
  });