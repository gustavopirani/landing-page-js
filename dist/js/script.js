const hamButton = document.getElementById('hamBtn');
function menu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');

}
hamButton.addEventListener('click', menu)

function ask() {
    var name = prompt("Hi! What's your name?");
    if (name === "") {
        alert("Invalid name!")
    } else if (name == null) {
        alert("Don't cancel me :(")
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        alert("Please only enter letters")
    } else {
        alert(`Welcome, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}! :)`)
    }
}

