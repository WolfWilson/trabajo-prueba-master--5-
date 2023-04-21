const $d=document;
const $selectProvincias = $d.getElementById("selectProvincias");
const $selecMunicipios = $d.getElementById("selectMunicipios");
const $selectLocalidades = $d.getElementById("selectLocalidades");

function provincia (){
fetch("https://apis.datos.gob.ar/georef/api/provincias")
.then(res => res.ok ? res.json() : Promise.reject(res))
.then(json => {

    let $options = `<option value="Elige una provincia">Elige una provincia</option>` ;

    json.provincias.forEach(el => $options += `<option value="${el.nombre}">${el.nombre}</option>`);

    $selectProvincias.innerHTML = $options;

    

})

.catch(error => {

  let message = error.statusText || "Ocurrio un error";

  $selectProvincias.nextElementSibling.innerHTML = `Error: ${error.status}: ${error.message}`;

})

}

$d.addEventListener("DOMContentLoaded" ,  provincia)


function municipio(provincia){

  fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&max=100`)

  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => {
      let $options = `<option value="Elige tu municipio">Elige tu municipio</option>`;

      json.municipios.forEach(el => $options += `<option value="${el.id}">${el.nombre}</option>`);

      $selecMunicipios.innerHTML = $options;

  })
  
  .catch(error => {

      let message = error.statusText || "Ocurrio un error";
    
      $selectProvincias.nextElementSibling.innerHTML = `Error: ${error.status}: ${error.message}`;
  })

}

$selectProvincias.addEventListener("change" , e => {
municipio(e.target.value);


})

function localidad(municipio){

  fetch(`https://apis.datos.gob.ar/georef/api/localidades?municipio=${municipio}&max=100`)

  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => {
      let $options = `<option value="Elige tu localidad">Elige tu localidad</option>`;

      json.localidades.forEach(el => $options += `<option value="${el.id}">${el.nombre}</option>`);

      $selectLocalidades.innerHTML = $options;

  })
  
  .catch(error => {

      let message = error.statusText || "Ocurrio un error";
    
      $selectLocalidades.nextElementSibling.innerHTML = `Error: ${error.status}: ${error.message}`;
  })

}

$selecMunicipios.addEventListener("change" , e => {
localidad(e.target.value);
console.log(e.target.value)


})