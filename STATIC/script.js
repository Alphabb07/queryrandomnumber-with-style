function RandomNumber(min, max){ //Algoritmo generazione numero random
    let casualNumber = Math.random();
    casualNumber = casualNumber  * (max - min) + min;
    casualNumber = parseInt(casualNumber);
    return casualNumber;
    
} 
let numero_generato = RandomNumber(1, 100); 
console.log("Numero generato: ", numero_generato);





function inpututente(){
    let num_utente = document.querySelector("#invia").value;
    num_utente = parseInt(num_utente);
    console.log("Input Utente:", num_utente);
if (num_utente === numero_generato){
    console.log("Hai vinto")
} else if  (num_utente < numero_generato){
    console.log("Il numero è troppo basso")
    } else {
        console.log("Il numero è troppo alto") 
        }
        
}

document.querySelector("#Send").addEventListener("click", inpututente);




