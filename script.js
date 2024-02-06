const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

/*
humanScoreNumber -> Camel Case
GAME_OPTIONS

*/
//ENUMS
const GAME_OPTIONS ={
PAPEL:'papel',
PEDRA:'pedra',
TESOURA:'tesoura'
}

const playHuman = (humanchoice) =>{
  playTheGame(humanchoice, playMachine())
}

const playMachine = () =>{
  const choice = [GAME_OPTIONS.PAPEL, GAME_OPTIONS.PEDRA, GAME_OPTIONS.TESOURA]
  const randomNumber = Math.floor(Math.random() * 3)
  return choice [randomNumber]
}

const playTheGame = (human, machine)=>{
  console.log('humano:' + human + " Maquina:" + machine)
  
  if(human === machine){
    result.innerHTML = "Deu Empate!"
  }
   else if ( (human ===GAME_OPTIONS.PAPEL && machine ===GAME_OPTIONS.PEDRA) || 
   (human ===GAME_OPTIONS.PEDRA && machine ===GAME_OPTIONS.TESOURA) ||
   (human ===GAME_OPTIONS.TESOURA && machine ===GAME_OPTIONS.PAPEL))
   {humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
      result.innerHTML = "Você Ganhou! Parabéns"
  }
   else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
      result.innerHTML = "Você Perdeu! Tente Novamente"
  }
}