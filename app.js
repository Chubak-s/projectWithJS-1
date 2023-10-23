const button = document.getElementById("btn");
const color = document.querySelector(".color");
const colors =["#FF5733", "#F9FF33", "#e3a3aa", "#004ba6", "#c47c00"]

const hex = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "F"
]

button.addEventListener("click", () => {
    let hexColor = getRandomColor();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber() {
    return Math.floor( Math.random() * colors.length );
}

function getRandomColor(){
    let randomColor="#";
    for (let i = 0; i<6; i++){
        randomColor+=hex[Math.floor( Math.random() * hex.length )]
    }
    return randomColor;
}