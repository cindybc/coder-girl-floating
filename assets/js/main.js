function cambioFrase(){
	var botoncito= document.getElementById("boton");
	botoncito.addEventListener("click", function(){
		document.querySelector(".chicas").innerHTML = "¡CONFIA EN TI!"
	});
}


cambioFrase();



function float(){
  var boton = document.getElementById("evento");
  boton.addEventListener("click", function(){
    document.getElementById("imagen").style.float= "right";
  })
}

float();



function validar(){

  var formulario = document.getElementById("formu");
  formulario.addEventListener("click", function(el){
   
    el.preventDefault();

	nombre= document.getElementById("name").value;
    correo= document.getElementById("mail").value;
    asuntito= document.getElementById("asunto").value;
    mensaje= document.getElementById("textarea").value;

  if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre))){
  	document.getElementById("validacion").innerHTML= "*Debe ingresar su nombre.(Debe iniciar con mayúscula)";
  }
  else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(correo))) {
    document.getElementById("validacion").innerHTML= "*Ingrese un email valido.(correo@mail.com)";
  }
  else if(asuntito == ""){
  	document.getElementById("validacion").innerHTML= "*Debe ingresar un asunto";
  }
  else if(mensaje == "" || mensaje.length > 100){
  	document.getElementById("validacion").innerHTML= "*Debe ingresar un mensaje con maximo de 100 caracteres";
  }
  else{

    document.getElementById("name").value= "";
    document.getElementById("mail").value= "";
    document.getElementById("asunto").value= "";
    document.getElementById("textarea").value= "";
    document.getElementById("validacion").innerHTML= "Mensaje enviado";

  }
})};

validar();