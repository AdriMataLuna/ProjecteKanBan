let zonaToDo = document.getElementById("zona1");
let zonaDoing = document.getElementById("zona2");
let zonaDone = document.getElementById("zona3");
let codi = document.getElementById("codi");
let nom = document.getElementById("nom");
let prev = document.getElementById("previsio_durada");
let term = document.getElementById("data_de_termini");
let desc = document.getElementById("descripcio");
let prio = document.getElementById("prioritat");
let guarda_dades = document.getElementById("final");


let nota = document.getElementById("nota1");


if(window.localStorage.getItem('0') == null){
    contador = 0;
}

function finalitza(){
    guardar();
    window.location.href = "./index.html";
    // neteja();
    // omple();
    
}

function guardar(){
    let date = new Date();

    date.getTime();
    console.log(codi.value);
    let tempData = {id: codi.value, nom: nom.value,
    prevDur: prev.value, term: term.value, descrip: desc.value,
    prio: prio.value,data: date.value,destination: 0, idNota: contador};
    window.localStorage.setItem(contador, JSON.stringify(tempData));
    contador++;
}

function omple(){
    for(i = 0;i < contador;i++){
    oldData = JSON.parse.window.localStorage.getItem(i);
    if(oldData.prio = 1){
        color = rgba(89,41,65,0.7);

    }else if(oldData.prio = 2){
        color = rgba(178, 211, 168,0.7);
    }else if(oldData.prio = 3){
        color = rgba(237, 229, 166,0.7);
    }
    if(oldData.destination == '1'){
     zonaToDo.innerHTML = 
     `<ul id="nota1" class="final" draggable="true" ondragstart="drag(event)">
     <li>
         <a background-color=color href="#">
             <button id="edit" class="editar"><i class="fas fa-edit"></i></button>
             <button id="elim" class="eliminar" onclick="eliminar()"><i class="fas fa-trash-alt"></i></button>
             <h1 hidden> ` + oldData.idNota + ` </h1>
             <h1> ` + oldData.id + ` </h1>
             <h1> ` + oldData.nom + ` </h1>
             <h1> ` + oldData.prevDur + ` </h1>
             <h1> ` + oldData.term + ` </h1>
             <h1> ` + oldData.descrip + ` </h1>
             <h1> ` + oldData.data + ` </h1>
         </a>
     </li>
 </ul>`;}
 else if(oldData.destination == '2'){
    zonaToDo.innerHTML = 
    `<ul id="nota1" class="final" draggable="true" ondragstart="drag(event)">
    <li>
        <a href="#">
            <button id="edit" class="editar"><i class="fas fa-edit"></i></button>
            <button id="elim" class="eliminar" onclick="eliminar()"><i class="fas fa-trash-alt"></i></button>
            <h1 hidden> ` + oldData.idNota + ` </h1>
             <h1> ` + oldData.id + ` </h1>
             <h1> ` + oldData.nom + ` </h1>
             <h1> ` + oldData.prevDur + ` </h1>
             <h1> ` + oldData.term + ` </h1>
             <h1> ` + oldData.descrip + ` </h1>
             <h1> ` + oldData.data + ` </h1>
        </a>
    </li>
</ul>`;}
else if(oldData.destination == '3'){
    zonaToDo.innerHTML = 
    `<ul id="nota1" class="final" draggable="true" ondragstart="drag(event)">
    <li>
        <a href="#">
            <button id="edit" class="editar"><i class="fas fa-edit"></i></button>
            <button id="elim" class="eliminar" onclick="eliminar()"><i class="fas fa-trash-alt"></i></button>
            <h1 hidden> ` + oldData.idNota + ` </h1>
             <h1> ` + oldData.id + ` </h1>
             <h1> ` + oldData.nom + ` </h1>
             <h1> ` + oldData.prevDur + ` </h1>
             <h1> ` + oldData.term + ` </h1>
             <h1> ` + oldData.descrip + ` </h1>
             <h1> ` + oldData.data + ` </h1>
        </a>
    </li>
</ul>`;}
}
}




function eliminar(){
    e_nota = document.getElementById("");
        e_nota.remove();
    }

function editar(){
    document.getElementById("titol").contentEditable = true;

}

function cambiar_fondo() {
    var nota = document.getElementById("nota1");
         nota.style.background="#9cc505f5";   
}
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

// function Showdades()
// {
//     let codi = document.getElementById("taskname");
//     let descripcio = document.getElementById("taskdescription");
//     let dataC = document.getElementById("taskdateC");
//     let dataF = document.getElementById("taskdateF");
//     let responsable = document.getElementById("taskrespons");
//     let prioritat = document.getElementById("taskstatus");

//     var todo = document.getElementById("todo");
//     var doing = document.getElementById("doing");
//     var done = document.getElementById("done");
//     todo.innerText='';
   
//     let taskAnteriory = JSON.parse(window.localStorage.getItem('Tasca'));
    
//     if(taskAnteriory != undefined){
        
//         for(let i = 0; i<taskAnteriory.length; i++)
//         {
//             let div;
        
//             if(taskAnteriory[i].Prioritat == 'NoUrgent'){
//                 div = todo.innerHTML += `<div id = "${taskAnteriory[i].Codi.toLowerCase().split(" ").join("")}" draggable = "true" ondragstart = "drag(event)" ondblclick="doble_click_edita(event)" class="NoUrgent"> 
//                     <span id = "tasca">${'Codi: ' + taskAnteriory[i].Codi + '<br>' + 'Descripció: ' + taskAnteriory[i].Descripcio + '<br>' + 'Responsable: ' + taskAnteriory[i].Responsable + '<button class="material-icons trash" id = "delete-button" onclick="eliminar_tasques(' + i})"> delete </button></span>
//                 </div>
//                 `
//             }
//             else if(taskAnteriory[i].Prioritat == 'Urgent'){
//                 div = todo.innerHTML += `
//                 <div id = "${taskAnteriory[i].Codi.toLowerCase().split(" ").join("")}" draggable = "true" ondragstart = "drag(event)" ondblclick="doble_click_edita(event)" class="Urgent"> 
//                     <span id = "tasca">${'Codi: ' + taskAnteriory[i].Codi + '<br>' + 'Descripció: ' + taskAnteriory[i].Descripcio + '<br>' + 'Responsable: ' + taskAnteriory[i].Responsable + '<button class="material-icons trash" id = "delete-button" onclick="eliminar_tasques(' + i})"> delete </button></span>
//                 </div>
//                 `
//             }
//             else if(taskAnteriory[i].Prioritat == 'MoltUrgent'){
//                 div = todo.innerHTML += `
//                 <div id = "${taskAnteriory[i].Codi.toLowerCase().split(" ").join("")}" draggable = "true" ondragstart = "drag(event)" ondblclick="doble_click_edita(event)" class="MoltUrgent"> 
//                     <span id = "tasca">${'Codi: ' + taskAnteriory[i].Codi + '<br>' + 'Descripció: ' + taskAnteriory[i].Descripcio + '<br>' + 'Responsable: ' + taskAnteriory[i].Responsable + '<button class="material-icons trash" id = "delete-button" onclick="eliminar_tasques(' + i})"> delete </button></span>
//                 </div>
//                 `
//             }
//             // if(taskAnteriory[i]. == 'NoUrgent')
//             // {
            
//             // }
//     }
// }

// }