const images = document.querySelectorAll('img');
const btn = document.querySelector(".start");
const hand =
{
    userHand: "",
    aiHand: "",
}
const numbers = 
{
    numberOfGames: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const imageClicked = function(e)
{
    document.querySelector(`[data-summary="who-win"]`).textContent = "";
    document.querySelector(`[data-summary="ai-choice"]`).textContent = "";
    images.forEach(image => image.style.border = "none");
    e.target.style.border = "solid red 5px";
    hand.userHand = e.target.dataset.option;
    document.querySelector(`[data-summary="your-choice"]`).textContent = e.target.dataset.option;
}
const gameStart = () =>
{
    hand.aiHand = aiChoice();
    gameResult();
}
const aiChoice = () =>
{
    const index = Math.floor(Math.random() * 3);
    const choice = images[index].dataset.option;
    document.querySelector(`[data-summary="ai-choice"]`).textContent = choice;
    return choice;
}
function gameResult()
{
    numbers.numberOfGames++;
    document.querySelector(".numbers span").textContent = numbers.numberOfGames;
    if((hand.userHand === "papier" && hand.aiHand === "kamień") || (hand.userHand === "kamień" && hand.aiHand === "nożyczki") || (hand.userHand === "nożyczki" && hand.aiHand === "papier"))
    {
        numbers.wins++;
        document.querySelector(".wins span").textContent = numbers.wins;
        document.querySelector(`[data-summary="who-win"]`).textContent = "JESTEŚ ZWYCIĘZCĄ";
    }
    else if(hand.userHand === hand.aiHand)
    {
        numbers.draws++;
        document.querySelector(".draws span").textContent = numbers.draws;
        document.querySelector(`[data-summary="who-win"]`).textContent = "JEST REMIS";
    }
    else
    {
        numbers.losses++;
        document.querySelector(".losses span").textContent = numbers.losses;
        document.querySelector(`[data-summary="who-win"]`).textContent = "WYGRAŁ KOMPUTER";
    }

}


images.forEach(image => image.addEventListener('click',imageClicked));
btn.addEventListener("click", gameStart);
