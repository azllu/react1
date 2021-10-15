import React, {Fragment, useState} from 'react';

const Formulario = () => {

  const [ cita, actualizarCita] = useState ({
    mascota: '',
    propietario:'',
    fecha: '',
    hora:'',
    sintomas:''

});

//función que se ejecuta cada que el usuario escribe un imput
 
const actualizarState = e => {
   actualizarCita ({
     ...cita,
    [e.target.name]: e.target.value
  })
}
//extraer los valores

const {mascota,propietario, fecha, hora, sintomas}= cita;


  return ( <Fragment>
    <h2> Crear Cita </h2>

    <form>
       onSubmit ={submitCita} = () => {
         e.preventDeFault()
         //alert ('Enviado') (avisa q se envió)
         }


        <label> Nombre Mascota </label>
        <input 
          type="text"
          name= "mascota"
          className= "u-full-width"
          placeholder= "Nombre Mascota"
          onChange= {actualizarState}
          value= {mascota}
        />

       <label> Nombre Dueño </label>
        <input 
          type="text"
          name= "Propietario"
          className= "u-full-width"
          placeholder= "Nombre dueño de la mascota"
          onChange= {actualizarState}
          value= {dueño}
        />

       <label> Fecha </label>
        <input 
          type="date"
          name= "fecha"
          className= "u-full-width"
          onChange= {actualizarState}
          value= {fecha}
        />

       <label> Hora </label>
        <input 
          type="time"
          name= "hora"
         className= "u-full-width"
         onChange= {actualizarState}
         value= {hora}
        />


       <label> Síntomas </label>
        <textarea
          className="u-full-width"
          name="síntomas"
          onChange= {actualizarState}
          value= {sintomas}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
          >Agregar citas</button>
          onChange= {actualizarState}
    </form>
    
</Fragment> );
}


 
export default Formulario;



