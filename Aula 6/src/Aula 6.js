var eduardo = {name: "Eduardo", win: 0, draw: 0, lose: 0, points: 0};
var thais = {name: "Thais", win: 0, draw: 0, lose: 0, points: 0};
var marcelo = {name: "Marcelo", win: 0, draw: 0, lose: 0, points: 0};
var players = [eduardo, thais, marcelo];

WriteOnScreen(players);

function addWin(i) {
  players[i].win++;

  WriteOnScreen(players);
}

function addDraw(i) {
  players[i].draw++;

  WriteOnScreen(players);
}

function addLose(i) {
  players[i].lose++;

  WriteOnScreen(players);
}

function ComputePoints(player) {
  var points = (player.win) * 3 + player.draw;
  return points;
}

function WriteOnScreen(players) {
  var elementHTML = "";
  
  for (let i = 0; i < players.length; i++) {
    players[i].points = ComputePoints(players[i]);

    elementHTML += "<tr><td>" + players[i].name + "</td>";
    elementHTML += "<td>" + players[i].win + "</td>";
    elementHTML += "<td>" + players[i].draw + "</td>";
    elementHTML += "<td>" + players[i].lose + "</td>";
    elementHTML += "<td>" + players[i].points + "</td>";
    elementHTML += "<td><button onClick='addWin(" + i + ")'>Vitória</button></td>";
    elementHTML += "<td><button onClick='addDraw(" + i + ")'>Empate</button></td>";
    elementHTML += "<td><button onClick='addLose(" + i + ")'>Derrota</button></td>";
    elementHTML += "</tr>";
  }

  document.getElementById("tabelaJogadores").innerHTML = elementHTML;
}

function clearTable() {
  for (let i = 0; i < players.length; i++) {
    players[i].win = 0;
    players[i].draw = 0;
    players[i].lose = 0;
    players[i].points = 0;
  }

  WriteOnScreen(players);
}