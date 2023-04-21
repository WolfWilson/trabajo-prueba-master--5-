

//Función Enviar Datos. NO se adonde xD......FER

function enviarDatos(){
    let varNombreYA= document.getElementById("nombreyapellido").value;
    let varEmail= document.getElementById("email").value;
    let varTelefono= document.getElementById("telefono").value;
    let varMensaje= document.getElementById("mensaje").value;

    let datosUsuario = "\n" + varNombreYA + "\n" + varEmail + "\n"+ varTelefono;  
    
    if (varNombreYA===""){
      document.getElementById("nombreyapellido-v").style.display = "block";
      document.getElementById("nombreyapellido").focus();
    } 
    
    if (varEmail===""){
      document.getElementById("email-v").style.display = "block";
      document.getElementById("email").focus();
      }
  
    if (varEmail===""){
      document.getElementById("email-v").style.display = "block";
      document.getElementById("email").focus();
    }
   
    if (varTelefono===""){
      document.getElementById("telefono-v").style.display = "block";
      document.getElementById("telefono").focus();
      } 

    if (varMensaje===""){
      document.getElementById("mensaje-v").style.display = "block";
      document.getElementById("mensaje").focus();
      } 
   
    if (varNombreYA!="" && varEmail!="" && varTelefono!="" && varEmail!="" && varMensaje!=""){
      alert ("Los datos ingresados son:" + " " + datosUsuario);  
      confirm ("El mensaje por enviar es:" + "\n" + varMensaje);  
     }   

}
    

