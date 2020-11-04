function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
docReady(() => M.AutoInit())


const towerSelection = document.getElementById("towerSelector")
const selectedTowers = document.getElementById("selectedTowers")
const timerSettings = document.getElementById("timerSettings")

const addATower = () => {
    const clone = towerSelection.content.cloneNode(true)
    clone.querySelector("button").addEventListener("click", () => selectedTowers.appendChild(addATower()))
    return clone
}

selectedTowers.appendChild(addATower())

const timerMins = [1,3,15,30]
const timerHrs = [1,3,12,24,48]

const timerField = (time, modifier) => {
    const clone = document.getElementById("timerSelector").content.cloneNode(true)
    clone.querySelector("span").textContent = `${time} ${modifier}`
    return clone
}


timerMins.forEach(time => {
    timerSettings.appendChild(timerField(time, "min"))
})
timerHrs.forEach(time => {
    timerSettings.appendChild(timerField(time, "hr"))
})

const researchLevels = ["Red", "Blue", "Orange", "Green", "Platinum"]
const researchField = researchName => {
    const clone = document.getElementById("researchSelection").content.cloneNode(true)
    clone.querySelector("span").textContent = researchName
    clone.querySelector("input").value = researchName
    return clone
}
document.getElementById("researchLevels").append(
    ...researchLevels.map(researchField)
)
