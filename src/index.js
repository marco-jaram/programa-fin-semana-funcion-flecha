import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//programa que revisa el dia. dice el nombre del dia y si es
//fin de semana lo dce si no tambien avisa

//crear funcion esFin una conts que me de el dia
//que me reotrno que el dia es identico al 0 o al 6

//crea un promot para obtener el nombre

let nombre = prompt("¿cual es tu nombre?");

//crea una funcion de flecha esFin dia o o dia 6
const esFIN = () => dia === 0 || dia === 6;
//crea const dia de hoy
const dia = new Date().getDay();
//crea array con nombres de dia de la semana

const nombresDias = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
];

//const mensaje igual a llamar a la guncion con con oprecion ternaria ? :
const mensaje = esFIN()
  ? "fin de semana mi chavo a disfrutar"
  : nombre +
    "  apenas es " +
    nombresDias[dia] +
    " mi chavo aguanta las carnitas";

//ma dar a dom con inner usando el arry para sacar los nombres
document.getElementById("out").innerHTML = mensaje;
