
alumnos =[{
    nombre: "Kendri Valdez",
    email: "kendrieva@gmail.com",
    materia: "Programacion 2"
},{
    nombre: "Jhonathan Valdez",
    email: "jhtvd@gmail.com",
    materia: "Quimica organica"
},{
    nombre: "Cristopher Valdez",
    email: "cristoPher@gmail.com",
    materia: "Calculo 2"
},{
    nombre: "Yohana Gonzalez",
    email: "Yohagonza@gmail.com",
    materia: "Derecho Romano"
},{
    nombre: "Naty Aquino",
    email: "natividad@gmail.com",
    materia: "Adm de empresas"
}];

const btnConfirmar = document.querySelector(".btnConfirmar");
const contenedor =  document.querySelector(".grid-container")

let htmlCode ="";
for (alumno in alumnos){

    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
     <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
            <div class="grid-item materia">${materia}</div>
         <div class="grid-item semana">
             <select class="semana-elegida">
                 <option value="Semana 1">Semana 1</option>
                 <option value="Semana 2">Semana 2</option>
             </select>
      </div>`;  
}
contenedor.innerHTML = htmlCode;
    

btnConfirmar.addEventListener("click", ()=>{
    let confirmar = confirm("Quiere confirmar las mesas?")
    if(confirmar){
        document.body.removeChild(btnConfirmar);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        };  
    }
});