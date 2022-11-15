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

    console.log(shopping_list[i]);

    i++;
};