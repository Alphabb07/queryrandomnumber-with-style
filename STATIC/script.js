function RandomNumber(min, max){ //Algoritmo generazione numero random
    let casualNumber = Math.random();
    casualNumber = casualNumber  * (max - min) + min;
    casualNumber = parseInt(casualNumber);
    return casualNumber;
    
} 
let numero_generato = RandomNumber(1, 100); 
console.log("Numero generato: ", numero_generato);
let tentativi = 5;

function inpututente(){
    let num_utente = document.querySelector("#numero").value;
    num_utente = parseInt(num_utente);
    if (isNaN(num_utente)) {
        console.log("Errore inserire un numero valido!")
        return;

    }
    console.log("Input Utente:", num_utente);
if (num_utente === numero_generato){
    console.log("Hai vinto")
} else if  (num_utente < numero_generato){
    tentativi = tentativi-1;
    console.log("Il numero è troppo basso");
    console.log("Tentativi rimanenti:",tentativi);
    if(tentativi === 0){
        console.log("Hai perso");
        invia.disabled = true;
    }
    } else {
        console.log("Il numero è troppo alto");
        tentativi = tentativi-1;
        console.log("Tentativi rimanenti:",tentativi)
        }
        
}


let invia = document.querySelector("#invia");
invia.addEventListener("click", inpututente); 





