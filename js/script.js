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

    console.log("Status:", resposta.status); 

    if (!resposta.ok) { 
      throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    const dados = await resposta.json();
    //ERRO 404
    if (ehTexto && dados.recipes.length === 0) {
      document.getElementById("nomeReceita").innerText = "Receita não encontrada";
      document.getElementById("imageReceita").src = "./images/vovo_confusa.png";
      document.getElementById("localReceita").innerHTML = "Local Inexistente";
      document.getElementById("dificuldadeReceita").innerHTML = "Sem Dificuldade, você consegue KKKK";
      document.getElementById("classificacaoReceita").innerHTML = "10 de 10, o melhor que tem";
      return;
    }

    let receita;
    if (ehTexto) {
      receita = dados.recipes[0];
    } else {
      receita = dados;
    }

    idAtual = receita.id;
    //DEU CERTO, MOSTRA A RECEITA
    console.table(receita);
    document.getElementById("nomeReceita").innerText = receita.name;
    document.getElementById("localReceita").innerHTML = receita.cuisine;
    document.getElementById("dificuldadeReceita").innerHTML = receita.difficulty;
    document.getElementById("classificacaoReceita").innerHTML = receita.rating;
    document.getElementById("imageReceita").src = receita.image;

    //ERRO 500
  } catch (error) {
    console.error("Erro:", error.message);
    document.getElementById("nomeReceita").innerText = "Eita! parece que a Vózinha acabou dormindo e não conseguiu encontrar a receita :(";
      document.getElementById("imageReceita").src = "./images/vovo_dormindo.png";
      document.getElementById("localReceita").innerHTML = "Dormindo...";
      document.getElementById("dificuldadeReceita").innerHTML = "Acho que no momento vai ser dificil";
      document.getElementById("classificacaoReceita").innerHTML = "ZZZ...";
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
