let chicasSolteras = [];
function llenarArray() {
    chicasSolteras = [
        {
          nombre: "Ana",
          apellidos: "López",
          estadoCivil: "soltera",
          coordenadas: {
            latitud: -11.9641972,
            longitud: -77.067295
          }
        },
        {
          nombre: "María",
          apellidos: "García",
          estadoCivil: "soltera",
          coordenadas: {
            latitud: -11.9650000,
            longitud: -77.068000
          }
        },
        {
          nombre: "Laura",
          apellidos: "Rodríguez",
          estadoCivil: "soltera",
          coordenadas: {
            latitud: -11.9635000,
            longitud: -77.066800
          }
        },
        {
          nombre: "Sofía",
          apellidos: "Pérez",
          estadoCivil: "soltera",
          coordenadas: {
            latitud: -11.9620000,
            longitud: -77.067500
          }
        },
        {
          nombre: "Paula",
          apellidos: "Martínez",
          estadoCivil: "soltera",
          coordenadas: {
            latitud: -11.9645000,
            longitud: -77.066000
          }
        },
        {
          nombre: "Lucía",
          apellidos: "Fernández",
          estadoCivil: "soltera",
          coordenadas: {
            latitud: -11.9652000,
            longitud: -77.065700
          }
        },
        {
          nombre: "Carla",
          apellidos: "Lara",
          estadoCivil: "soltera",
          coordenadas: {
            latitud: -11.9637000,
            longitud: -77.067800
          }
        },
        {
          nombre: "Isabella",
          apellidos: "Silva",
          estadoCivil: "soltera",
          coordenadas: {
            latitud: -11.9646000,
            longitud: -77.067100
          }
        },
        {
          nombre: "Valentina",
          apellidos: "Díaz",
          estadoCivil: "soltera",
          coordenadas: {
            latitud: -11.9649000,
            longitud: -77.067600
          }
        },
        {
          nombre: "Camila",
          apellidos: "Hernández",
          estadoCivil: "soltera",
          coordenadas: {
            latitud: -11.9651000,
            longitud: -77.068200
          }
        }
    ];
}

function estaCerca(chica, latitud, longitud, distanciaMaxima) {
    let distancia = calcularDistancia(
      chica.coordenadas.latitud,
      chica.coordenadas.longitud,
      latitud,
      longitud
    );
    return distancia <= distanciaMaxima;
}

function calcularDistancia(lat1, lon1, lat2, lon2) {
    var radioTierra = 6371; // Radio de la Tierra en kilómetros
    var dLat = (lat2 - lat1) * (Math.PI / 180);
    var dLon = (lon2 - lon1) * (Math.PI / 180);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distancia = radioTierra * c;
    distancia = (distancia/1000).toFixed(5);
    return distancia;
}

function renderChicasSolteras(array, $id) {
    const latitudErison = localStorage.getItem("latitud");
    const longitudErison = localStorage.getItem("longitud");
    $id.html("");
    const arrayCercanas = [];
    array.forEach((chica) => {
        const latitud = chica.coordenadas.latitud;
        const longitud = chica.coordenadas.longitud;
        const chicaObject = new Object();
        chicaObject.nombre = chica.nombre;
        chicaObject.apellidos = chica.apellidos;
        chicaObject.estadoCivil = chica.estadoCivil;        
        chicaObject.distancia = calcularDistancia(latitud, longitud, latitudErison, longitudErison);
        arrayCercanas.push(chicaObject);
    });
    arrayCercanas.sort(function(a, b) {
        return a.distancia - b.distancia;
    });
    //imprimirlo
    arrayCercanas.forEach((elemento) => {
        const template = `<div class="elementoChica">
            <h3>${elemento.nombre} ${elemento.apellidos}</h3>
            <p>${elemento.estadoCivil}</p>
            <span>a ${elemento.distancia}Km de ti</span>
        </div>`;
        $id.append(template);
    });
}

if (localStorage.getItem("user")) { 
    const $user = $("#user");
    const $listLadys = $("#listLadys");
    const distanciaenKm = 1;
    const user = localStorage.getItem("user");
    const template = `<p><i>${user[0]}</i>${user}</p>`;
    $user.append(template);
    //$.ajax();
    llenarArray();
    renderChicasSolteras(chicasSolteras, $listLadys);
} else {
    window.location.href = "index.html";
}
