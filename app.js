function pesquisar() {
  // Essa função busca por dados e exibe os resultados em uma seção HTML.

  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (campoPesquisa == ""){
    section.innerHTML = "Digite um nome de uma lenda"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado e constrói o HTML para cada item
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

      // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <p>${dado.titulo}</p>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais Informações</a>
      </div>
    `;
    }
  }

// Se a pesquisa for diferente dos textos, informa nada encontrado
  if (!resultados){
    resultados = "<p>Nada encontrado</p>"
  }

  // Atualiza o conteúdo da seção com os resultados
  section.innerHTML = resultados;

}
