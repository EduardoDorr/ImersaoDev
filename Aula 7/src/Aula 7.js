var cards = [
  {
    name: "Flamerion",
    class: "Archer",
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
    attributes: {
      Strenght: 5,
      Dexterity: 2,
      Vitality: 10,
      Magic: 4
    }
  },
  {
    name: "Nutaluk",
    class: "Lancer",
    attributes: {
      Strenght: 7,
      Dexterity: 8,
      Vitality: 6,
      Magic: 5
    }
  },
  {
    name: "Lonewolf",
    class: "Swordman",
    attributes: {
      Strenght: 9,
      Dexterity: 6,
      Vitality: 7,
      Magic: 2
    }
  },
  {
    name: "Arthur",
    class: "Fighter",
    attributes: {
      Strenght: 10,
      Dexterity: 7,
      Vitality: 4,
      Magic: 7
    }
  },
  {
    name: "Haru",
    class: "Duelist",
    attributes: {
      Strenght: 6,
      Dexterity: 9,
      Vitality: 6,
      Magic: 3
    }
  },
  {
    name: "So Yong",
    class: "Elementalist",
    attributes: {
      Strenght: 1,
      Dexterity: 6,
      Vitality: 5,
      Magic: 10
    }
  },
  {
    name: "Sir Newt Screws",
    class: "Knight",
    attributes: {
      Strenght: 8,
      Dexterity: 4,
      Vitality: 8,
      Magic: 5
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

  console.log(playerCard);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  WriteOptions(playerCard);
}

function jogar() {
  var selectedAttribute = GetAttribute();
  var playerCardValue = playerCard.attributes[selectedAttribute];
  var cpuCardValue = cpuCard.attributes[selectedAttribute];

  console.log(playerCardValue);
  console.log(cpuCardValue);

  if (playerCardValue > cpuCardValue) {
    document.getElementById("resultado").innerHTML = "Você ganhou!";
  }
  else if (playerCardValue == cpuCardValue) {
    document.getElementById("resultado").innerHTML = "Você empatou!";
  }
  else{
    document.getElementById("resultado").innerHTML = "Você perdeu!";
  }

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function WriteOptions(card) {
  var elementHTML = "";

  for (var attribute in card.attributes) {
    elementHTML += "<input type='radio' name='attributes' value='" + attribute + "'>";
    elementHTML += attribute;
  }

  document.getElementById("opcoes").innerHTML = elementHTML;
}

function GetAttribute() {
  radioAttributes = document.getElementsByName("attributes");

  for (let i = 0; i < radioAttributes.length; i++) {
    if (radioAttributes[i].checked) {
      return radioAttributes[i].value;
    }    
  }
}