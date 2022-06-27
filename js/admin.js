const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

async function listarEventos() {
  const tabela = document.querySelector("tbody");
  const resposta = await fetch(`${BASE_URL}/events`, {
    method: "GET",
    redirect: "follow",
    headers: { "Content-Type": "application/json" },
  });
  console.log(resposta);
  const conteudoResposta = await resposta.json();
  conteudoResposta.forEach((item) => {
    tabela.innerHTML += `<tr>
    <th scope="row">${conteudoResposta.indexOf(item)}</th>
    <td>${item.scheduled}</td>
    <td>${item.name}</td>
    <td>${item.attractions}</td>
    <td>
        <a href="reservas.html" class="btn btn-dark">ver reservas</a>
        <a href="editar.html" class="btn btn-secondary">editar</a>
        <a href="editar.html" class="btn btn-danger">excluir</a>
    </td>
</tr>`;
  });
}

listarEventos();
