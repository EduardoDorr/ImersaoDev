var cards = [
  {
    name: "Flamerion",
    class: "Archer",
    url: "https://i.ibb.co/3hk5DLf/Flamerion-Archer.png",
    attributes: {
      Strenght: 2,
      Dexterity: 10,
      Vitality: 6,
      Magic: 4
    }
  },
  {
    name: "Rufus",
    class: "Shielder",
    url: "https://i.ibb.co/T1zdp6K/Rufus-Shielder.png",
    attributes: {
      Strenght: 4,
      Dexterity: 4,
      Vitality: 10,
      Magic: 8
    }
  },
  {
    name: "Nutaluk",
    class: "Lancer",
    url: "https://i.ibb.co/1G5Xfd9/Nutaluk-Lancer.png",
    attributes: {
      Strenght: 8,
      Dexterity: 7,
      Vitality: 6,
      Magic: 2
    }
  },
  {
    name: "Lonewolf",
    class: "Swordsman",
    url: "https://i.ibb.co/hsz3Rrh/Lonewolf-Swordsman.png",
    attributes: {
      Strenght: 8,
      Dexterity: 6,
      Vitality: 5,
      Magic: 7
    }
  },
  {
    name: "So Yong",
    class: "Fighter",
    url: "https://i.ibb.co/kBP1t19/So-Yong-Fighter.png",
    attributes: {
      Strenght: 10,
      Dexterity: 7,
      Vitality: 4,
      Magic: 7
    }
  },
  {
    name: "Arthur",
    class: "Duelist",
    url: "https://i.ibb.co/CtpWgv7/Arthur-Duelist.png",
    attributes: {
      Strenght: 6,
      Dexterity: 9,
      Vitality: 6,
      Magic: 3
    }
  },
  {
    name: "Haru",
    class: "Elementalist",
    url: "https://i.ibb.co/V9qHDzb/Haru-Elementalist.png",
    attributes: {
      Strenght: 2,
      Dexterity: 6,
      Vitality: 4,
      Magic: 10
    }
  },
  {
    name: "Sir Terrance Screws",
    class: "Knight",
    url: "https://i.ibb.co/mT41jZF/Sir-Terrance-Screws-Knight.png",
    attributes: {
      Strenght: 8,
      Dexterity: 4,
      Vitality: 8,
      Magic: 2
    }
  }
];

var playerCard = 0;
var cpuCard = 0;

function sortearCarta() {
  var tempCards = cards;
  var index = Math.floor(Math.random() * tempCards.length);
  playerCard = tempCards[index];
  tempCards.splice(index, 1);

  index = Math.floor(Math.random() * tempCards.length);
  cpuCard = tempCards[index];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  ScreenPlayerCard(playerCard);
}

function resetar() {
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("options").innerHTML = "";
  document.getElementById("cards").innerHTML = "";
}

function jogar() {
  var selectedAttribute = GetAttribute();
  var playerCardValue = playerCard.attributes[selectedAttribute];
  var cpuCardValue = cpuCard.attributes[selectedAttribute];

  if (playerCardValue > cpuCardValue) {
    document.getElementById("resultado").innerHTML = "Você ganhou!";
  }
  else if (playerCardValue == cpuCardValue) {
    document.getElementById("resultado").innerHTML = "Você empatou!";
  }
  else{
    document.getElementById("resultado").innerHTML = "Você perdeu!";
  }

  document.getElementById("btnJogar").disabled = true;

  ScreenCpuCard(cpuCard);
}

function ScreenPlayerCard(card) {
  var divPlayerCard = document.getElementById("carta-jogador");
  divPlayerCard.style.backgroundImage = `url(${card.url})`;
  //divPlayerCard.style.backgroundImage = "url(" + card.url + ")"; # Mesma coisa que o anterior
  var frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var attributeHTML = "";

  for (var attribute in card.attributes) {
    attributeHTML += "<input type='radio' name='attributes' value='" + attribute + "'>" + attribute + " " + card.attributes[attribute] + "<br>";
  }

  var nameCard = `<p class="carta-subtitle">${card.name}</p>`;

  divPlayerCard.innerHTML = frame + nameCard + tagHTML + attributeHTML + "</div>";
}

function ScreenCpuCard(card) {
  var divCpuCard = document.getElementById("carta-maquina");
  divCpuCard.style.backgroundImage = `url(${card.url})`;
  var frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var attributeHTML = "";

  for (var attribute in card.attributes) {
    attributeHTML += "<p type='text' name='attributes' value='" + attribute + "'>" + attribute + " " + card.attributes[attribute] + "</p><br>";
  }

  var nameCard = `<p class="carta-subtitle">${card.name}</p>`;

  divCpuCard.innerHTML = frame + nameCard + tagHTML + attributeHTML + "</div>";
}

function GetAttribute() {
  radioAttributes = document.getElementsByName("attributes");

  for (let i = 0; i < radioAttributes.length; i++) {
    if (radioAttributes[i].checked) {
      return radioAttributes[i].value;
    }    
  }
}