// Creo la lista della spesa come array

let shopping_list = ["uova", "latte", "pane", "cereali", "pasta", "prosciutto"];

// Stampo in console la lista della spesa con il ciclo for

console.log("---Ciclo for:---")

for (let i = 0; i < shopping_list.length; i++) {

    console.log(shopping_list[i]);

};

// Stampo in console la lista della spesa con il ciclo while

console.log("---Ciclo while:---");

let i = 0;

while (i < shopping_list.length) {

    //Stampo nella console    
    console.log(shopping_list[i]);
    //Stampo nell'elenco puntato dell'HTML
    document.getElementById("shopping_list").innerHTML += "<li>" + shopping_list[i] + "</li>";
    i++;
};

//Funzione che permette di agggiungere elementi alla lista della spesa

function AddItem() {

    //Leggo l'input dell'utente, trasformandolo in variabile
    let new_item = document.getElementById("InputItem").value;
    //Stampo in console l'elemento che l'utente vuole aggiungere
    console.log("L'elemento da lei aggiunto è: " + new_item);
    //Aggiungo l'elemento nella lista
    document.getElementById("shopping_list").innerHTML += "<li>" + new_item + "</li>";
};