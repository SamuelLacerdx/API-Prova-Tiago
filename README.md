# Receitas da Vovó API 🧑‍🍳

Site para buscar receitas pelo nome ou ID do prato, consumindo dados de uma API externa. Desenvolvido com HTML, CSS e JavaScript.

---

✨ Funcionalidades

- 🔍 Busca de receitas por nome ou por ID
- ⏮️ Navegação entre receitas com botões Anterior e Próximo
- 📄 Exibição de nome, imagem, culinária, dificuldade e classificação da receita

---

- 📱 Responsividade para Tablets e Celulares.

---

```
├── assets/
│   ├── background.png
│   ├── vovo.jpg
│   └── vovo_confusa.png
├── css/
│   └── atv.css
├── js/
│   └── script.js
└── atvRevisao.html
└── README.md

```

---

## 🔌 API utilizada

Os dados são buscados via **[DummyJSON Recipes](https://dummyjson.com/recipes)**.

| Tipo de busca | Endpoint                                            |
| ------------- | --------------------------------------------------- |
| Por ID        | `GET https://dummyjson.com/recipes/{id}`            |
| Por nome      | `GET https://dummyjson.com/recipes/search?q={nome}` |

> A API suporta IDs de 1 a 50.
