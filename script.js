let zonaToDo = document.getElementById("zona1");
let zonaDoing = document.getElementById("zona2");
let zonaDone = document.getElementById("zona3");
let desti = document.getElementById("zona").value;
let id = document.getElementById("codi").value;
let nom = document.getElementById("nom").value;
let prev = document.getElementById("data_de_previsio").value;
let term = document.getElementById("data_de_termini").value;
let desc = document.getElementById("descripcio").value;
let prio = document.getElementById("prioritat").value;
let guarda_dades = document.getElementById("final");
let nota = document.getElementById("nota1");


if(window.localStorage.getItem('0') == null){
    contador = 0;
}

guarda_dades.addEventListener("click", () => {
    guardar();
    window.location.href = "./index.html";
    // neteja();
    omple();
    
})

function guardar(){
    date = getDate;
    let tempData = {
        id: id.value, nom: nom.value,
    prevDur: prev.value, term: term.value, descrip: desc.value,
    color: prio.value,data: date.value,destination: desti.value};
    window.localStorage.setItem(contador, JSON.stringify(tempData));
    contador++;
}

function omple(){
    zonaToDo.innerHTML = "<div> <h1> HOLA </h1> </div>";
    for(i = 0;i < contador;i++){
    oldData = JSON.parse.window.localStorage.getItem(i);
    if(oldData.destination == '1'){
     zonaToDo.innerHTML = 
     `<ul id="nota1" class="final" draggable="true" ondragstart="drag(event)">
     <li>
         <a href="#">
             <button id="edit" class="editar"><i class="fas fa-edit"></i></button>
             <button id="elim" class="eliminar" onclick="eliminar()"><i class="fas fa-trash-alt"></i></button>
             <h1> ` + oldData.id + ` </h1>
             <h1> ` + oldData.nom + ` </h1>
             <h1> ` + oldData.prevDur + ` </h1>
             <h1> ` + oldData.term + ` </h1>
             <h1> ` + oldData.descrip + ` </h1>
             <h1> ` + oldData.data + ` </h1>
             <h1> ` + oldData.destination + ` </h1>
         </a>
     </li>
 </ul>`;}else if(oldData.destination == '2'){
    zonaToDo.innerHTML = 
    `<ul id="nota1" class="final" draggable="true" ondragstart="drag(event)">
    <li>
        <a href="#">
            <button id="edit" class="editar"><i class="fas fa-edit"></i></button>
            <button id="elim" class="eliminar" onclick="eliminar()"><i class="fas fa-trash-alt"></i></button>
            <h1> ` + oldData.id + ` </h1>
            <h1> ` + oldData.nom + ` </h1>
            <h1> ` + oldData.prevDur + ` </h1>
            <h1> ` + oldData.term + ` </h1>
            <h1> ` + oldData.descrip + ` </h1>
            <h1> ` + oldData.data + ` </h1>
            <h1> ` + oldData.destination + ` </h1>
        </a>
    </li>
</ul>`;}else if(oldData.destination == '3'){
    zonaToDo.innerHTML = 
    `<ul id="nota1" class="final" draggable="true" ondragstart="drag(event)">
    <li>
        <a href="#">
            <button id="edit" class="editar"><i class="fas fa-edit"></i></button>
            <button id="elim" class="eliminar" onclick="eliminar()"><i class="fas fa-trash-alt"></i></button>
            <h1> ` + oldData.id + ` </h1>
            <h1> ` + oldData.nom + ` </h1>
            <h1> ` + oldData.prevDur + ` </h1>
            <h1> ` + oldData.term + ` </h1>
            <h1> ` + oldData.descrip + ` </h1>
            <h1> ` + oldData.data + ` </h1>
            <h1> ` + oldData.destination + ` </h1>
        </a>
    </li>
</ul>`;}
}
}




function eliminar(){
    id = window.localStorage.getItem('id');
    window.localStorage.removeItem('id');
    omple();
}

// if(window.localStorage.getItem('dades') != null){
//     if(fullData.){

//     }else if (){

//     }else{

//     }
// }

// color = document.getElementById("nota").innerHTML;
// if (color.style.background-color == #592941){
//     document.getElementById("nota").style.background-color = "#0000FF";
//     color.getElementById("")
// }
// if (color == "rojo"){
//     document.getElementById("color").style.background-color = "#FF0000";
// }

// rgb(89,41,65,0.7); => #592941
// rgb(178, 211, 168,0.7); => #B2D3A8
// rgb(237, 229, 166,0.7); => #EDE5A6

