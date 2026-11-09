const jogadoresFutebol = [
  {
    nome: "Lionel Messi",
    idade: 39,
    time: "Inter Miami",
    golsCarreira: 850,
    valorAtual: "25 milhões de euros"
  },
  {
    nome: "Cristiano Ronaldo",
    idade: 41,
    time: "Al-Nassr",
    golsCarreira: 910,
    valorAtual: "15 milhões de euros"
  },
  {
    nome: "Kylian Mbappé",
    idade: 27,
    time: "Real Madrid",
    golsCarreira: 320,
    valorAtual: "180 milhões de euros"
  },
  {
    nome: "Erling Haaland",
    idade: 26,
    time: "Manchester City",
    golsCarreira: 260,
    valorAtual: "180 milhões de euros"
  },
  {
    nome: "Vinicius Jr.",
    idade: 26,
    time: "Real Madrid",
    golsCarreira: 110,
    valorAtual: "150 milhões de euros"
  }
];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let fifa of jogadoresFutebol){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${fifa.nome}</td>
        <td>${fifa.idade}</td>
        <td>${fifa.time}</td>
        <td>${fifa.golsCarreira}</td>
        <td class="preco">${fifa.valorAtual.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }