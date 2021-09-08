// store the numbers' frequency
let numbersFrequency = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// roll the dices
function rollDices() {
    const diceOne = Math.floor(Math.random() * 6) + 1
    const diceTwo = Math.floor(Math.random() * 6) + 1
    const diceOneAndTwo = diceOne + diceTwo

    return diceOneAndTwo
}

// generate the graphic bars
function generateGraph() {
    const graphicBarContainer = document.getElementById('graphContainer')

    for (i = 0; i < numbersFrequency.length; i++) {

        const graphicBar = document.createElement('div')
        graphicBar.innerText = numbersFrequency[i]
        graphicBar.style.height = `${numbersFrequency[i]}px`
        graphicBar.style.width = '50px'
        graphicBar.style.backgroundColor = 'rgb(19, 230, 0)'


        graphicBarContainer.appendChild(graphicBar)
    }
}

// iterates the function rollDices() a thousand times, 
// appending the numbers' frequency to the array numbersFrequency
for (let i = 0; i < 1000; i++) {
    const result = rollDices()

    if (result === 2) {numbersFrequency[0] += 1}
    if (result === 3) {numbersFrequency[1] += 1}
    if (result === 4) {numbersFrequency[2] += 1}
    if (result === 5) {numbersFrequency[3] += 1}
    if (result === 6) {numbersFrequency[4] += 1}
    if (result === 7) {numbersFrequency[5] += 1}
    if (result === 8) {numbersFrequency[6] += 1}
    if (result === 9) {numbersFrequency[7] += 1}
    if (result === 10) {numbersFrequency[8] += 1}
    if (result === 11) {numbersFrequency[9] += 1}
    if (result === 12) {numbersFrequency[10] += 1}
}

generateGraph()
