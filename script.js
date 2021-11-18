let fullData = JSON.parse.window.localStorage.getItem('dades');
let guarda_dades = document.getElementById("final");



guarda_dades.addEventListener("click", () => {

    date = getDate;
    let tempData = {codi: codi.value, nom: nom.value,
    prevDur: data_de_previsio.value, term: data_de_termini.value,
    desc: descripcio.value, data: date.value};
    window.localStorage.setItem('dades', JSON.stringify(dada));

})



eliminar.addEventListener("click", () => {
    window.localStorage.removeItem('dades');
    titol.innerText = `Hola Nou Usuari`;
})








// // if(window.localStorage.getItem('dades') != null){
// //     if(fullData.){

// //     }else if (){

// //     }else{

// //     }
// // }

// // function printarSeccions(){

// // }

// // function afegir(){
// //     const nota  = document.getElementById("1").innerHTML;
// //     document.getElementById("2").innerHTML = nota; 
// //     console.log(nota)
// // }

// // function eliminar(){
// //     var eliminado = document.getElementById("nota2");
// //     eliminado.parentNode.removeChild(eliminado);

// //     window.localStorage.removeItem('dades');
// // }


// // function editar(){

// // }

// // function guardar(){
// //     dades = [];
// //     let dades.push({nom: nom.value, encarregat: encarregat.value, descripcio: descripcio.value});
// //     window.localStorage.setItem('dades', JSON.stringify(dada));
// // }


// // function dragstart(caja, event) {
// //     // el elemento a arrastrar
// //     event.dataTransfer.setData('Data', caja.id);
// // }

// // function drag(target, event) {
// //     console.log("drag");
// //     return false;
// // }

// // function dragend(target, event) {
// //     console.log("dragend");
// //     return false;
// // }

// // function dragenter(target, event) {
// //     console.log("dragenter");
// //     return false;
// // }

// // function dragleave(target, event) {
// //     console.log("dragleave");
// //     return false;
// // }

// // function dragover(event) {
// //     console.log("dragover");
// //     event.preventDefault();
// //     return false;
// // }

// // function drop(target, event) {
// //     // obtenemos los datos
// //     var caja = event.dataTransfer.getData('Data');
// //     // agregamos el elemento de arrastre al contenedor
// //     target.appendChild(document.getElementById(caja));
// // }


// // color = document.getElementById("nota").innerHTML;
// // if (color.style.background-color == #592941){
// //     document.getElementById("nota").style.background-color = "#0000FF";
// //     color.getElementById("")
// // }
// // if (color == "rojo"){
// //     document.getElementById("color").style.background-color = "#FF0000";
// // }

// // rgb(89,41,65,0.7); => #592941
// // rgb(178, 211, 168,0.7); => #B2D3A8
// // rgb(237, 229, 166,0.7); => #EDE5A6