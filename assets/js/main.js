// Select dom element
const fizzbuzzRowEl = document.querySelector(".fizzbuzz_row");
const formEl = document.querySelector("form");
const fizzEl = document.querySelector("#fizz");
const buzzEl = document.querySelector("#buzz");

console.log(fizzbuzzRowEl);
/* ============================================================================ */

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  fizzbuzzRowEl.innerHTML = "";
  // get the input value
  const fizz = e.target.fizz.value;
  const buzz = e.target.buzz.value;

  for (let i = 1; i <= 100; i++) {
    let special = `${i}`;
    let bgColorCard = "bg-info";

    if (i % fizz == 0) {
      special = "Fizz";
      bgColorCard = "bg-warning";
      if (i % buzz == 0) {
        special = "Fizzbuzz";
        bgColorCard = "bg-success";
      }
    } else if (i % buzz == 0) {
      special = "Buzz";
      bgColorCard = "bg-danger";
    }

    console.log(`${i} ${special}`);

    // Modo 1 - Inserisco struttura tramite STRINGA
    // const colCardElement = `<div class="col"><div class="card p-3 ${bgColorCard} ">${j} ${special}</div></div>`;
    // rowEl.innerHTML += colCardElement;

    // Modo 2 - Uso ADD e APPEND
    const colElement = document.createElement("div");
    colElement.classList.add("col");

    const cardEl = document.createElement("div");
    cardEl.classList.add("card", "p-1", "text-center", bgColorCard);
    cardEl.style.width = "4.5rem";
    cardEl.innerText = special; //Aggiungo il contenuto della Card

    colElement.appendChild(cardEl);
    fizzbuzzRowEl.append(colElement);
  }
});

formEl.addEventListener("reset", function (e) {
  console.log("ho cliccato su reset");
  // svuto il ticket
  fizzbuzzRowEl.innerHTML = "";
});

/* ============================================================================ */
