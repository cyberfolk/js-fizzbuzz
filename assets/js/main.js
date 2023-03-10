/* Consegna:
 * Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
 *  - per i multipli di 3 stampi “Fizz” al posto del numero
 *  - per i multipli di 5 stampi “Buzz”
 *  - per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 *
 * Consigli del giorno:
 * 1. Scriviamo sempre prima dei commenti in italiano o inglese per capire cosa vogliamo fare
 * 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
 * 3. Facciamo attenzione all'ordine delle condizioni che usiamo
 *
 * BONUS 1:
 * Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
 * Potete usare vari strumenti per farlo:
 *  - `append()` oppure
 *  - `.innerHTML`
 *  - `.insertAdjacentHTML()`
 *
 * BONUS 2:
 * Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
 * Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.*/

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
