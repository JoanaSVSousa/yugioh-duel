const resetButton = document.querySelector("#reset");
const playSelector = document.querySelector("#playto");

const p1 = {
    score: document.querySelector("#playto").value,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: document.querySelector("#playto").value,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

let damage = document.querySelector("#damage");
let winScore = 0;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.display.textContent = player.score;
        player.score -= parseInt(damage.value);
        if (player.score === winScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }

    }
}
p1.button.addEventListener("click", function () {
    updateScore(p1, p2);
})

p2.button.addEventListener("click", function () {
    updateScore(p2, p1);
})

playSelector.addEventListener("change", reset)

resetButton.addEventListener("click", reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = document.querySelector("#playto").value;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
}