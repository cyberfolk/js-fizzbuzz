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

const rowEl = document.querySelector(".row");
console.log(rowEl);

for (let i = 1; i <= 100; i++) {
  let special = "";
  let bgColorCard = "bg-info";
  let j = i;
  if (i % 3 == 0 && i % 5 == 0) {
    special = "Fizzbuzz";
    bgColorCard = "bg-success";
    j = "";
  } else if (i % 3 == 0) {
    special = "Fizz";
    bgColorCard = "bg-warning";
    j = "";
  } else if (i % 5 == 0) {
    special = "Buzz";
    bgColorCard = "bg-danger";
    j = "";
  }

  console.log(`${i} ${special}`);

  /*   const colCardElement = `<div class="col"><div class="card p-3 ${bgColorCard} ">${j} ${special}</div></div>`;
  rowEl.innerHTML += colCardElement; */

  const colElement = document.createElement("div");
  colElement.classList.add("col");
  console.log(`colElement: ${colElement}. classe: ${colElement.classList}`);

  const cardEl = document.createElement("div");
  cardEl.classList.add("card", "p-3");
  console.log(`cardEl: ${cardEl}. classe: ${cardEl.classList}`);

  const colCardEl = colElement.appendChild(cardEl);
  console.log(`colCardEl: ${colCardEl}`);

  console.log(colCardEl);
  rowEl.append(colCardEl);
}
