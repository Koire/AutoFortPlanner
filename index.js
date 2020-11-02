const towerSelection = document.getElementById("towerSelector")
const selectedTowers = document.getElementById("selectedTowers")
const timerSettings = document.getElementById("timerSettings")

selectedTowers.appendChild(towerSelection.content.cloneNode(true))
const timerMins = [1,3,15,30]
const timerHrs = [1,3,12,24,48]

const timerField = (time, modifier) => {
    const newNode = document.createElement("div")
    const label = document.createElement("label")
    const input = document.createElement("input", {type: "number"})
    label.textContent = `${time}${modifier}`
    label.appendChild(input)
    newNode.appendChild(label)
    return newNode
}

timerMins.forEach(time => {
    timerSettings.appendChild(timerField(time, "min"))
})
timerHrs.forEach(time => {
    timerSettings.appendChild(timerField(time, "hr"))
})
