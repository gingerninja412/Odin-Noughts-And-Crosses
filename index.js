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
  let instructions = body.find("#instructions")

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
  let filledTiles = 0
  let gameEnded = false

  //game functions

  function runGame () {
    options.css("display", "none")
    game.css("display", "flex")
    fillGrid()
  }

  function resetGame () {
    options.css("display", "flex")
    game.css("display", "none")
    gameBoard.empty()
    tilesList = []
    filledTiles = 0
    gameEnded = false
    instructions.text("")
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
    if (players = 1 && gameEnded == false) {
      this.element.text(singlePlayerSymbol) 
      this.value = singlePlayerSymbol
      filledTiles++
      checkForWin()
      if(gameEnded == false) {
        computerTurn()
      }
      checkForWin()
    }
  }

  function computerTurn () {
    if(filledTiles < 9) {
      let potentialTile = tilesList[Math.floor(Math.random() * tilesList.length)]
      while(potentialTile.value != '') {
        potentialTile = tilesList[Math.floor(Math.random() * tilesList.length)]
      }
      console.log(potentialTile)
      if(singlePlayerSymbol == "X") {
        potentialTile.element.text("O")
        potentialTile.value = "O"
      } else {
        console.log("the computerSymbol is O")
        potentialTile.element.text("X")
        potentialTile.value = "X"
      }
      filledTiles++
    }
    console.log(singlePlayerSymbol)
  }

  function checkForWin() {
    if (players = 1) {
      let computerSymbol = null
      if(singlePlayerSymbol == "X") {
        computerSymbol = "O"
      } else {
        computerSymbol = "X"
      }
      if (tilesList[0].value == singlePlayerSymbol && tilesList[1].value == singlePlayerSymbol && tilesList[2].value == singlePlayerSymbol) {
        console.log("you won")
        gameEnded = true
        instructions.text("you won, press back to reset")
      } else if (tilesList[3].value == singlePlayerSymbol && tilesList[4].value == singlePlayerSymbol && tilesList[5].value == singlePlayerSymbol) {
        console.log("you won")
        gameEnded = true
        instructions.text("you won, press back to reset")
      } else if (tilesList[6].value == singlePlayerSymbol && tilesList[7].value == singlePlayerSymbol && tilesList[8].value == singlePlayerSymbol) {
        console.log("you won")
        gameEnded = true
        instructions.text("you won, press back to reset")
      } else if (tilesList[0].value == singlePlayerSymbol && tilesList[3].value == singlePlayerSymbol && tilesList[6].value == singlePlayerSymbol) {
        console.log("you won")
        gameEnded = true
        instructions.text("you won, press back to reset")
      } else if (tilesList[1].value == singlePlayerSymbol && tilesList[4].value == singlePlayerSymbol && tilesList[7].value == singlePlayerSymbol) {
        console.log("you won")
        gameEnded = true
        instructions.text("you won, press back to reset")
      } else if (tilesList[2].value == singlePlayerSymbol && tilesList[5].value == singlePlayerSymbol && tilesList[8].value == singlePlayerSymbol) {
        console.log("you won")
        gameEnded = true
        instructions.text("you won, press back to reset")
      } else if (tilesList[0].value == singlePlayerSymbol && tilesList[4].value == singlePlayerSymbol && tilesList[8].value == singlePlayerSymbol) {
        console.log("you won")
        gameEnded = true
        instructions.text("you won, press back to reset")
      } else if (tilesList[2].value == singlePlayerSymbol && tilesList[4].value == singlePlayerSymbol && tilesList[6].value == singlePlayerSymbol) {
        console.log("you won")
        gameEnded = true
        instructions.text("you won, press back to reset")
      } else if (tilesList[0].value == computerSymbol && tilesList[1].value == computerSymbol && tilesList[2].value == computerSymbol) {
        console.log("you lost")
        gameEnded = true
        instructions.text("you lost, press back to reset")
      } else if (tilesList[3].value == computerSymbol && tilesList[4].value == computerSymbol && tilesList[5].value == computerSymbol) {
        console.log("you lost")
        gameEnded = true
        instructions.text("you lost, press back to reset")
      } else if (tilesList[6].value == computerSymbol && tilesList[7].value == computerSymbol && tilesList[8].value == computerSymbol) {
        console.log("you lost")
        gameEnded = true
        instructions.text("you lost, press back to reset")
      } else if (tilesList[0].value == computerSymbol && tilesList[3].value == computerSymbol && tilesList[6].value == computerSymbol) {
        console.log("you lost")
        gameEnded = true
        instructions.text("you lost, press back to reset")
      } else if (tilesList[1].value == computerSymbol && tilesList[4].value == computerSymbol && tilesList[7].value == computerSymbol) {
        console.log("you lost")
        gameEnded = true
        instructions.text("you lost, press back to reset")
      } else if (tilesList[2].value == computerSymbol && tilesList[5].value == computerSymbol && tilesList[8].value == computerSymbol) {
        console.log("you lost")
        gameEnded = true
        instructions.text("you lost, press back to reset")
      } else if (tilesList[0].value == computerSymbol && tilesList[4].value == computerSymbol && tilesList[8].value == computerSymbol) {
        console.log("you lost")
        gameEnded = true
        instructions.text("you lost, press back to reset")
      } else if (tilesList[2].value == computerSymbol && tilesList[4].value == computerSymbol && tilesList[6].value == computerSymbol) {
        console.log("you lost")
        gameEnded = true
        instructions.text("you lost, press back to reset")
      } else if(filledTiles == 9) {
        gameEnded = true
        instructions.text("draw, press back to reset")
      }
    } 
    
  }  

})();
