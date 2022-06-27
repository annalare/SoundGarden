const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const inputNome = document.querySelector("#nome");
const inputPoster = document.querySelector("#poster");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const form = document.querySelector("form");

form.onsubmit = async (evento) => {
  evento.preventDefault();

  const novoEvento = {
    name: inputNome.value,
    poster: inputPoster.value,
    attractions: inputAtracoes.value.split(","),
    description: inputDescricao.value,
    scheduled: inputData.value,
    number_tickets: inputLotacao.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(novoEvento),
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  };

  const resposta = await fetch(`${BASE_URL}/events`, options);
  const conteudoResposta = await resposta.json();
  console.log(conteudoResposta);

  if (resposta.status == 201) {
    alert("Evento cadastrado com sucesso!");
    inputNome.value = "";
    inputPoster.value = "";
    inputAtracoes.value = "";
    inputDescricao.value = "";
    inputData.value = "";
    inputLotacao.value = "";
  }
};
