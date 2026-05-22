let idAtual = 0;
async function buscarReceita() {
  const idDigitado = document.getElementById("idReceita").value.trim();

  if (!idDigitado) {
    alert("Digite um nome ou ID!");
    return;
  }
  const ehTexto = isNaN(idDigitado);

  let api;
  if (ehTexto) {
    api = `https://dummyjson.com/recipes/search?q=${idDigitado}`;
  } else {
    api = `https://dummyjson.com/recipes/${idDigitado}`;
  }

  const dados = await (await fetch(api)).json();

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
  document.getElementById("dificuldadeReceita").innerHTML = receita.difficulty;
  document.getElementById("classificacaoReceita").innerHTML = receita.rating;
  document.getElementById("imageReceita").src = receita.image;
}

function proximo() {
  document.getElementById("idReceita").value = idAtual + 1;
  buscarReceita();
}

function anterior() {
  if (idAtual > 1) {
    document.getElementById("idReceita").value = idAtual - 1;
    buscarReceita();
  }
}
