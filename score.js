// Setting up the game and conditionals
const resetButton = document.querySelector("#reset");
const playSelector = document.querySelector("#playto");
let damage = document.querySelector("#damage");
let isGameOver = false;
// Setting up the players
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
// Score Calculator
function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score -= parseInt(damage.value);
        player.display.textContent = player.score;
        if (player.score <= 0) {
            isGameOver = true;
            player.display.classList.add("has-text-danger");
            opponent.display.classList.add("has-text-success");
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
// Setting up New Duel
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
