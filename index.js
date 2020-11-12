import {TowerData} from "./rawData.js";
import {AutoInitM} from "./lib/MaterializeHelpers.js";
import {h} from "./lib/h.js"
import {makeAnObserver} from "./lib/MaterializeHelpers.js";

AutoInitM()

const selectedTowers = document.getElementById("selectedTowers")
const timerSettings = document.getElementById("timerSettings")


const addATower = () => {
    const select = h("select", {},
        Object
            .keys(TowerData)
            .sort((a,b) => a.localeCompare(b))
            .map(towerName => h("option", {value: towerName}, towerName))
    )
    makeAnObserver(select, () => M.FormSelect.init(select))
    return h( "li", {class: "collection-item"}, [
        h("div", {class: "row"}, [
            h("div", {class: "input-field col s5"}, [
                select,
                h("label", {}, "Tower Type:")
            ]),
            h("div", {class: "col s5 input-field"}, [
                h("input", {type: "number"}),
                h("label", {}, "Level:")
            ]),
            h("div", {class: "col s2 input-field"}, [
                h("button", {
                    class: "waves-effect waves-light btn btn-flat cyan",
                    onClick: () => selectedTowers.appendChild(addATower())
                    }, "+")
            ])
        ])
    ])
}

selectedTowers.appendChild(addATower())

const timerMins = [1,3,15,30]
const timerHrs = [1,3,12,24,48]

const timerField = (time, modifier) => {
    const label = h("label", {}, `${time} ${modifier}`)
    return h("li", {class:"collection-item"}, [
        h("div", {class:"row"}, [
            h("div", {class:"input-field"}, [
                label,
                h("input", {
                    type: "number",
                    onBlur: ({target: {value}}) => value.length === 0 && label.classList.remove("active"),
                    onFocus: e => label.classList.add("active")
                })
            ])
        ])
    ])
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
