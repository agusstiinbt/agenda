const guardarContacto=(db,contacto)=>{
  
    db.setItem(contacto.id,JSON.stringify(contacto))/*guarda con un id en dónde guardarlo y el contacto */
    window.location.href='/'//esta funcion esta buena porque borra los campos anteriores. te re dirije a la misma pagina


} 


const cargarContactos=(db,parentNode)=>{
//en la pagina en la parte de application las keys que son el id esta como un numero y queire traerlo
    let claves= Object.keys(db);
   /* console.log(claves);
    for(claves of claves){
        //console.log(claves)
        let contacto= JSON.parse(db.getItem(claves))
        console.log(contacto.id)
    }*/

    for(claves of claves){

        let contacto=JSON.parse(db.getItem(claves))
        crearContacto(parentNode,contacto,db)
    }
}


const crearContacto=(parentNode,contacto,db)=>{

    let divContacto=document.createElement('div')
    let nombreContacto=document.createElement('h3')
    let numeroContacto=document.createElement('p')
    let direccionContacto=document.createElement('p')
    let iconoBorrar=document.createElement('span')

    nombreContacto.innerHTML=contacto.nombre
    numeroContacto.innerHTML=contacto.numero
    direccionContacto.innerHTML=contacto.direccion
    iconoBorrar.innerHTML='delete_forever'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons','icono')


    iconoBorrar.onclick=()=>{
        db.removeItem(contacto.id)
        window.location.href='/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)

}