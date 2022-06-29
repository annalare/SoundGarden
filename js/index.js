const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const evento = document.querySelector("#eventos");
const dataCorreta = (date) => {
  let data = date.split("");
  let dataArrumada =
    data.slice(8, 10).join("") +
    "/" +
    data.slice(5, 7).join("") +
    "/" +
    data.slice(0, 4).join("");
  return dataArrumada;
};

async function listarEventos() {
  const tabela = document.querySelector("tbody");
  const resposta = await fetch(`${BASE_URL}/events`, {
    method: "GET",
    redirect: "follow",
    headers: { "Content-Type": "application/json" },
  });
  console.log(resposta);

  const conteudoResposta = await resposta.json();
  const bandas = conteudoResposta.slice(0, 3);
  bandas.forEach((item) => {
    evento.innerHTML += ` <article class="evento card p-5 m-3">
  <h2>${item.name} - ${dataCorreta(item.scheduled)}</h2>
  <h4>${item.attractions}</h4>
  <p>${item.description}</p>
  <button class="btn btn-primary" onclick="abreModal()" >reservar ingresso</button>
</article>`;
  });
}

listarEventos();
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function abreModal() {
  myInput.focus();
});
