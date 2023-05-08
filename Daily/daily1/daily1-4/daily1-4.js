const p1 = ['rock', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'paper', 'paper', 'rock', 'scissors']
const p2 = ['paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'rock']

const playGame = (p1_choice, p2_choice) => {
	// 작성해 주세요
  for (let x=0; x<10; x++) {
    if (p1_choice[x] === p2_choice[x]) {
      console.log(0)
    }
    else if (p1_choice[x] === 'rock' && p2_choice[x] === 'scissors') {
      console.log(1)
    }
    else if (p1_choice[x] === 'scissors' && p2_choice[x] === 'paper') {
      console.log(1)
    }
    else if (p1_choice[x] === 'paper' && p2_choice[x] === 'rock') {
      console.log(1)
    }
    else {
      console.log(2)
    }
  }
}
playGame(p1,p2)
