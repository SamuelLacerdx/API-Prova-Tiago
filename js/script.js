// ID Atual que o usuario está
let idAtual = 0;

async function buscarReceita() {
  const idDigitado = document
    .getElementById("idReceita")
    .value.trim()
    .replace(/\s+/g, "");

  // Verifica se oq foi
  const ehTexto = isNaN(idDigitado);

  let api;
  if (ehTexto) {
    api = `https://dummyjson.com/recipes/search?q=${idDigitado}`;
  } else {
    api = `https://dummyjson.com/recipes/${idDigitado}`;
  }

  try {
    const resposta = await fetch(api);
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    const dados = await resposta.json();

    let receita;
    if (ehTexto) {
      receita = dados.recipes[0];
    } else {
      receita = dados;
    }

    idAtual = receita.id;

    console.table(receita);
    document.getElementById("nomeReceita").innerText = receita.name;
    document.getElementById("localReceita").innerHTML = receita.cuisine;
    document.getElementById("dificuldadeReceita").innerHTML =
      receita.difficulty;
    document.getElementById("classificacaoReceita").innerHTML = receita.rating;
    document.getElementById("imageReceita").src = receita.image;

    // CASO VENHA A DAR ERRO DE NÃO!!!
  } catch (error) {
    document.getElementById("nomeReceita").innerText = "Receita não encontrada";
    document.getElementById("imageReceita").src = "./images/vovo_confusa.png";
    document.getElementById("localReceita").innerHTML = "Local Inexistente";
    document.getElementById("dificuldadeReceita").innerHTML =
      "Sem Dificuldade, você consegue KKKK";
    document.getElementById("classificacaoReceita").innerHTML =
      "10 de 10, o melhor que tem";
    console.error("Erro:", error.message);
  }
}

function proximo() {
  if (idAtual < 50) {
    document.getElementById("idReceita").value = idAtual + 1;
    buscarReceita();
  }
}

function anterior() {
  if (idAtual > 1) {
    document.getElementById("idReceita").value = idAtual - 1;
    buscarReceita();
  }
}
