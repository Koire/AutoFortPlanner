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


const selectedTowers = document.getElementById("selectedTowers")
const timerSettings = document.getElementById("timerSettings")

const makeAnObserver = (element, fn) => {
    const observer = new MutationObserver(() => {
        if(document.contains(element)) {
            fn()
            observer.disconnect()
        }
    })
    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
    return observer
}

const addATower = () => {
    const clone = document.getElementById("towerSelector").content.cloneNode(true)
    const select = clone.querySelector("select")
    makeAnObserver(select, () => M.FormSelect.init(select))
    clone.querySelector("button").addEventListener("click", () => selectedTowers.appendChild(addATower()))
    return clone
}

selectedTowers.appendChild(addATower())

const timerMins = [1,3,15,30]
const timerHrs = [1,3,12,24,48]

const timerField = (time, modifier) => {
    const clone = document.getElementById("timerSelector").content.cloneNode(true)
    const label = clone.querySelector("label")
    label.textContent = `${time} ${modifier}`
    clone.querySelector("input").addEventListener('focus', e => label.classList.add("active"))
    clone.querySelector("input").addEventListener('blur', ({target: {value}}) => {
        if(value.length === 0){
            label.classList.remove("active")
        }
    })
    makeAnObserver(label, () =>{
        M.updateTextFields()
    })

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
document.getElementById("researchLevels").prepend(
    ...researchLevels.map(researchField)
)
