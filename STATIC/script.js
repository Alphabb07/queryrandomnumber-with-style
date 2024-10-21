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
        document.querySelector("#tentativi_rimanenti").innerHTML = "Inserire un numero!";
        document.querySelector("#alpha").innerHTML = "";
        document.querySelector("#beta").innerHTML = "";
        return;

    }
    console.log("Input Utente:", num_utente);
if (num_utente === numero_generato){
    document.body.classList.add('green');
    console.log("Hai vinto")
    document.querySelector("#alpha").innerHTML = "";
    document.querySelector("#tentativi_rimanenti").innerHTML = "Hai vinto!";
    document.querySelector("#beta").innerHTML = "";
    invia.disabled = true;
} else if  (num_utente < numero_generato){
    tentativi = tentativi-1;
    console.log("Il numero è troppo basso");
    console.log("Tentativi rimanenti:",tentativi);
    document.querySelector("#alpha").innerHTML = "Numero troppo basso! Hai ancora:";
    document.querySelector("#tentativi_rimanenti").innerHTML = tentativi;
    document.querySelector("#beta").innerHTML = "tentativi";
    if(tentativi === 3){
        document.body.classList.toggle('yellow');
    }  else if (tentativi === 1){
        document.body.classList.add('red');
        document.body.classList.remove('yellow');

    }

    
    
    
    
    
    
    
    
    
    
    
    
    if(tentativi === 0){
        console.log("Hai perso");
        invia.disabled = true;
        document.querySelector("#tentativi_rimanenti").innerHTML = "Hai perso!";
        document.querySelector("#beta").innerHTML = "Riprova!";
        document.querySelector("#alpha").innerHTML = "";
    }
    } else {
        console.log("Il numero è troppo alto");
        tentativi = tentativi-1;
        console.log("Tentativi rimanenti:",tentativi)
        }
        
}


let invia = document.querySelector("#invia");
invia.addEventListener("click", inpututente); 




