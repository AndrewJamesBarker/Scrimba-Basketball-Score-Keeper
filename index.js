let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

const homeTeamName = document.getElementById("home-team")
const guestTeamName = document.getElementById("guest-team")

let homeBox = document.getElementById("homebox")
let guestBox = document.getElementById("guestbox")



let homeScore = 0
let guestScore = 0

function scoreAdder(team, points) {
    if (team === "home") {
        homeScore += points
        homeScoreEl.textContent = homeScore
    }
    else {
        guestScore += points
        guestScoreEl.textContent = guestScore
    }
    highlightLeader()
    boxHighlight()
}

function gameReset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore

    highlightLeader()
    boxHighlight()
}

function highlightLeader(){
    if (homeScore > guestScore){
      homeTeamName.classList.add("highlight")
      guestTeamName.classList.remove("highlight")
    } else if(homeScore < guestScore){
       guestTeamName.classList.add("highlight") 
       homeTeamName.classList.remove("highlight")
    } else if(homeScore = guestScore){
      homeTeamName.classList.remove("highlight")  
      guestTeamName.classList.remove("highlight")
    }
    else {
        homeTeamName.classList.remove("highlight")  
        guestTeamName.classList.remove("highlight")
      }
}

function boxHighlight(){
  if (homeScore === guestScore){
    homeBox.style.border = "5px solid #2fc64b"
    guestBox.style.border = "5px solid #2fc64b"
  }
  else if (homeScore > guestScore){
     homeBox.style.border = "5px solid #ff8800"
     guestBox.style.border = "5px solid #080001"
  }
  else if (homeScore < guestScore){
      guestBox.style.border = "5px solid #ff8800"
      homeBox.style.border = "5px solid #080001"
    }
  
  else {
    homeBox.style.border = "5px solid #080001"
    guestBox.style.border = "5px solid #080001"
  }
}
// if (homePoint === guestPoint) {
//   homeScoreBox.style.border = '5px solid #3CCF4E';
//   guestScoreBox.style.border = '5px solid #3CCF4E';
// } else if (homePoint > guestPoint) {
//   homeScoreBox.style.border = '5px solid #c21010';
//   guestScoreBox.style.border = 'none';
// } else if (homePoint < guestPoint) {
//   guestScoreBox.style.border = '5px solid #c21010';
//   homeScoreBox.style.border = 'none';
// }
