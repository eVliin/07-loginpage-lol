const button = document.getElementById("bt");
const usr = document.querySelectorAll(".inpt")[0];
const pass = document.querySelectorAll(".inpt")[1];

button.classList.add("disable");

function change() {
    if (usr.value && pass.value.length >= 8) {
        button.classList.remove("disable");
    } else {
        button.classList.add("disable");
    }
};

usr.addEventListener("input", change);
pass.addEventListener("input", change);