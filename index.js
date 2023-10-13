var control = (function () {
  //DOM Elements
  //Containers
  let body = $("body")
  let options = body.find(".options")
  let game = body.find(".game")
  let SymbolContainer = body.find(".X-or-O")
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

  //game functions
  function runGame () {
    options.css("display", "none")
    game.css("display", "flex")
  }

  function resetGame () {
    options.css("display", "flex")
    game.css("display", "none")
  }

  function changeMode () {
    if(gameMode.text() == "One Player") {
      gameMode.text("Two players")
      SymbolContainer.css("display", "none")
    } else {
      gameMode.text("One Player")
      SymbolContainer.css("display", "block")
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
  }

  return {
    start: startGame
  }
})();

console.log(control)