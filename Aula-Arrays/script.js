let corpo = document.querySelector("body");
let numeros = [6, 9, 24, 6, 9];
let strings = ["jurou", "oh do", "ta dscp"];

function adicionarParagrafo(a){
    var paragrafo = document.createElement("p");
    paragrafo.textContent = a;
    corpo.appendChild(paragrafo);
}

//forEach
numeros.forEach((elemento)=>(adicionarParagrafo(elemento))); 
strings.forEach((elemento)=>(adicionarParagrafo(elemento))); 

/*from
let texto = "texto";
let arrayTexto = Array.from(texto);
arrayTexto.forEach((elemento)=>(adicionarParagrafo(elemento)));

concat
let total = numeros.concat(strings);
total.forEach((elemento)=>(adicionarParagrafo(elemento)));

//push
strings.push("SOCORRO");
//push
strings.pop("SOCORRO");


//unshift
numeros.unshift(12);
//shift
numeros.shift();


//reverse
numeros.reverse();
//join
strings.join("*");
adicionarParagrafo(strings)


//slice
let novasstrings = strings.slice(2, 3)
novasstrings.forEach((elemento)=>(adicionarParagrafo(elemento)));

//splice
strings.slice(2, 2)
strings.forEach((elemento)=>(adicionarParagrafo(elemento)));*/

//some
if(numeros.some(24)){
    alert("sim 24");
}else(
    alert("não 24");
)