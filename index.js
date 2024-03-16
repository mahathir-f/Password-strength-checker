var password = document.getElementById("password");
var msg = document.getElementById('msg');
var strength = document.getElementById("strength");


password.addEventListener("input",()=>{
    if (password.value.length > 0) {
        msg.style.display = "block";
    }else{
        msg.style.display = "none";
    }
    if (password.value.length <= 4) {
        strength.innerHTML = "weak"
        password.style.border = "2px solid #ff5925"
        msg.style.color = " #ff5925"
    }
    if (password.value.length > 4 &&password.value.length <= 8) {
        strength.innerHTML = "medium";
        password.style.border = "2px solid yellow"
        msg.style.color = "yellow"

    }
    if (password.value.length > 8 ){
        strength.innerHTML = "strong";
        password.style.border = "2px solid #26d730"
        msg.style.color = "#26d730"
    }
})