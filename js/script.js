// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const rubrica = ['davide470@tiscali.it','elena@gmail.com','nicola@live.com','francesco78@tiscali.it','cartadavi@gmail.com','vale98@gmail.com','eleonorabianchi@tiscali.it' ];

const emailCercata = prompt('digita mail');
let emailCorrispondente = 0;

for (let i=0; i<7; i++){
  if(rubrica[i]===emailCercata){
    emailCorrispondente = 1;
  }
}
let permesso = 'non puo accedere'
if (emailCorrispondente){
  permesso= 'puo accedere';
}

const soluzioni = document.querySelector('h1');
soluzioni.innerHTML = permesso;



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let numbers =[0,0];
for(let i=0; i<2; i++){
  let random = Math.floor(Math.random()*6)+1;
  numbers[i] = random;
}
const numMine = numbers[0];
const numPc = numbers[1];
console.log(numMine);
console.log(numPc);
let vincita = 'hai perso';
if (numMine>numPc){
  vincita = 'hai Vinto';
}
if (numMine===numPc){
  vincita= 'non ha vinto nessuno';
}
console.log(vincita);

const soluzioni = document.querySelector('h1');
soluzioni.innerHTML = vincita;
