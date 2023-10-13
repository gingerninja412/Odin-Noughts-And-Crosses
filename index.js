var control = (function () {
  //DOM Elements
  //Containers
  let body = $("body")
  let options = body.find(".options")
  let game = body.find(".game")
  let SymbolContainer = body.find(".X-or-O")
  let gameBoard = body.find(".game-board")
  //buttons
  let startGame = body.find("#start")
  let reset = body.find(".back-button")
  let gameMode = body.find("#game-mode")
  let X = {
    element: body.find("#X"),
    checked: true
  }
  let Y = {
    element: body.find("#O"),
    checked: false
  }

  //event bindings
  startGame.on("click", runGame)
  reset.on("click", resetGame)
  gameMode.on("click", changeMode)
  X.element.on("click", selectSymbolX)
  Y.element.on("click", selectSymbolY)
  
  //tile factory
  function Tile (element) {
    this.element = element
    this.value = ""
  }

  //control variables 
  let singlePlayerSymbol = "X"
  let players = 1;
  let tilesList = []

  //game functions

  function runGame () {
    options.css("display", "none")
    game.css("display", "flex")
    fillGrid()
  }

  function resetGame () {
    options.css("display", "flex")
    game.css("display", "none")
  }

  function changeMode () {
    if(gameMode.text() == "One Player") {
      gameMode.text("Two players")
      SymbolContainer.css("display", "none")
      players = 2
    } else {
      gameMode.text("One Player")
      SymbolContainer.css("display", "block")
      players = 1
    }
  }

  function selectSymbolX () {
    if(Y.checked == true) {
      Y.element.css("background-color", "#ACE4AA")
      Y.element.css("color", "black")
      Y.checked = false
    }
    X.element.css("background-color", "#03440C")
    X.element.css("color", "white")
    X.checked = true
    singlePlayerSymbol = "X"
  }

  function selectSymbolY () {
    if(X.checked == true) {
      X.element.css("background-color", "#ACE4AA")
      X.element.css("color", "black")
      X.checked = false
    }
    Y.element.css("background-color", "#03440C")
    Y.element.css("color", "white")
    Y.checked = true
    singlePlayerSymbol = "O"
  }

  function fillGrid () {
    for (let i = 0; i < 9; i++) {
      let newTile = new Tile($("<div class='tile'></div>"))
      tilesList.push(newTile)
      newTile.element[0].addEventListener("click", function () {
        turn.call(newTile)
      })
      gameBoard.append(newTile.element)
    }
  }

  function turn () {
    if (players = 1) {
      this.element.text(singlePlayerSymbol) 
      this.value = singlePlayerSymbol
      computerTurn()
    }
  }

  function computerTurn () {
    let potentialTile = tilesList[Math.floor(Math.random() * tilesList.length)]
    while(potentialTile.value = '') {
      potentialTile = tilesList[Math.floor(Math.random() * tilesList.length)]
    }
    console.log(potentialTile)
  }
})();
