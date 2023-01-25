//variables
const botonusuario = document.querySelector('#generaruser');
const foto = document.getElementById('Imgportrait');
const dirmail= document.getElementById('idcorreo');
const numerotel = document.getElementById('idnumero');
const Nombre = document.getElementById('nombreid');
const Pais = document.getElementById ('idpais');
const Edad = document.getElementById('Edad');
//funciones
    const generarusuario= async ()=>{ 
        try {
            const url = 'https://randomuser.me/api/';
            const respuesta1 = await fetch(url);
            const {results} = await respuesta1.json();
            const datos = results [0];
            console.log(datos);
            foto.src = datos.picture.large;
            Nombre.textContent = datos.name.first + " " + datos.name.last;
            dirmail.textContent = datos.email;
            numerotel.textContent = datos.phone;
            Pais.textContent = datos.location.country + ", " + datos.location.city;
            Edad.textContent = datos.dob.age
        } catch (error) {
            console.log(error)
        }
    }  
    


botonusuario.addEventListener('click',generarusuario);
document.addEventListener('DOMContentLoaded',generarusuario);

function MostrarInfo(Elementid) {
    switch (Elementid) {
        case "Experiencia": 
            document.querySelector('#Forma').style.display='none';
            document.querySelector('#Cont').style.display='none';
            document.querySelector('#null').style.display='none';
            document.querySelector('#Exp').style.display='grid';
            break;
        case "Formacion":
            document.querySelector('#Exp').style.display='none';
            document.querySelector('#Cont').style.display='none';
            document.querySelector('#null').style.display='none'; 
            document.querySelector('#Forma').style.display='grid';
            break;
        case "Contacto":
            document.querySelector('#Forma').style.display='none';
            document.querySelector('#Exp').style.display='none';
            document.querySelector('#null').style.display='none'; 
            document.querySelector('#Cont').style.display='grid';
            break;
        default:
            document.querySelector('#null').style.display='grid'
            break;
    }

}
