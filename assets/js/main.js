const btnEl = document.getElementById("btn-find-out");
const formEl = document.getElementById("search");
const inputEl = document.getElementById("Distant");
const hoursfood = document.getElementById("anhour");
const hoursCycle = document.getElementById("2-hour");
const hoursCar = document.getElementById("3-hour");
const hoursPlane = document.getElementById("4-hour");
hoursfood.innerText = "n hours"
hoursCycle.innerText = "n hours"
hoursCar.innerText = "n hours"
hoursPlane.innerText = "n hours"
formEl.addEventListener("submit", (e) => {
e.preventDefault();
hoursfood.innerText = inputEl.value / 3 + "hours";
hoursCycle.innerText = inputEl.value / 8 + "hours";
hoursCar.innerText = inputEl.value / 90 + "hours";
hoursPlane.innerText = inputEl.value / 800 + "hours";
}
)