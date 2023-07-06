/*
Steps:
1. Take a string input
2. Separate each section of the string into an array of subsections
3. Get the score for that section from the by counting the 1s
4. Add up the scores from each section and return the total score
*/

function getScore(){
    const binaryString = document.getElementById("enter-binary").value;
    const sectionsArray = binaryString.split(".")
    const scoresArray = sectionsArray.map(section => {
        let sectionCount = 0;
        let sectionScore = 0;
        for(i = 0; i < section.length; i++){
            if(section[i] == 1){
                sectionCount++;
            }
        }
        sectionScore = Math.floor(Math.pow(2, sectionCount - 4) * 8);
        return sectionScore;
    })
    let totalScore = 0;
    scoresArray.forEach(score =>{
        totalScore += score;
    })
    const form = document.querySelector(".form1")
    const scoreCard = document.createElement('div')
    scoreCard.className = "card"
    const scoreDisplay = document.createElement('div')
    scoreDisplay.className = "card-body"
    scoreDisplay.innerText = totalScore
    scoreCard.insertAdjacentElement("afterbegin", scoreDisplay)
    form.append(scoreCard)
    return totalScore;
}

// KayLa's Solution

