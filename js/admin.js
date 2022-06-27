const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

async function listarEventos() {
  const resposta = await fetch(`${BASE_URL}/events`, {
    method: "GET",
    redirect: "follow",
    headers: { "Content-Type": "application/json" },
  });
  console.log(resposta);

  const conteudoResposta = await resposta.json();
  console.log(conteudoResposta);
}

listarEventos();
