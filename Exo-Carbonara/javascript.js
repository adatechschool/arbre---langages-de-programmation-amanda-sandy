let myArray = [' Pates', ' Oeuf', ' Sel', ' Poivre', ' Lardons', ' Oignon', ' Parmesan'];
myArray[7] ;
let i = myArray.length ;
console.log(myArray);
console.log("Il y a "+ i + " ingrédients.") ;

document.createElement('table')
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Ingrédients";
row_1.appendChild(heading_1);
thead.appendChild(row_1);

for(let i = 0; i < myArray.length; i++){
    let row = document.createElement('tr');
    let row_data = document.createElement('td');
    row_data.innerHTML = myArray[i];
    row.appendChild(row_data);
    tbody.appendChild(row);
}

document.getElementById("First").innerHTML = "Il y a "+ i + " ingrédients." ;

document.getElementById("Second").innerHTML = myArray ;


let orderedList = document.getElementById("myList");
for(let i = 0; i < myArray.length; i++){
    let element = document.createElement("li");
    element.innerHTML = myArray[i];
   orderedList.appendChild(element)
}
 
let a = myArray;
let m = a.sort();
console.log(m);
document.getElementById("Alpha").innerHTML = m ;