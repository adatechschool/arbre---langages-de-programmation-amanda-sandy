    var phrase = "Il y a 7 ingrédients dans cette recette"
    console.log (phrase)
    document.getElementById("p").innerHTML=phrase

    var array = ["Pâte","Oeuf","Sel","Poivre","Lardon","Oignon","Parmesan"]
   // document.getElementById("list").innerHTMl=array.sort()
   array.sort()

    function list(){
    var html = ""
    for (var i=0; i < array.length;i++){
    html += "<li>" + array[i] + "</li>"
    console.log(array[i])
    document.getElementById("list").innerHTML=html
}
}

list()