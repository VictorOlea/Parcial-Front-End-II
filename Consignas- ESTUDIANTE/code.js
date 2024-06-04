/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = 2024 - parseInt(prompt("Ingresa el año que naciste"));
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  let interesPorJs = confirm("Te interesa JavaScript?");
  interesPorJs ? (datosPersona.interesPorJs = "Sí") : (datosPersona.interesPorJs = "No");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector("#nombre").innerText = datosPersona.nombre;
  document.querySelector("#edad").innerText = datosPersona.edad;
  document.querySelector("#ciudad").innerText = datosPersona.ciudad;
  document.querySelector("#javascript").innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const materias = document.querySelector("#fila");

  if (!materias.hasChildNodes())
    listado.forEach((materia) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const lenguajes = document.createElement("p");
      const bimestre = document.createElement("p");

      div.classList.add("caja");

      img.setAttribute("src", materia.imgUrl);
      img.setAttribute("alt", materia.lenguajes);

      lenguajes.textContent = materia.lenguajes;
      lenguajes.classList.add("lenguajes");
      bimestre.textContent = materia.bimestre;
      bimestre.classList.add("bimestre");

      div.appendChild(img);
      div.appendChild(lenguajes);
      div.appendChild(bimestre);

      materias.appendChild(div);
    });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
function verInfo() {
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() == "f") {
      const sobreMi = document.querySelector("#sobre-mi");
      sobreMi.classList.remove("oculto");
    }
  });
}

verInfo();
