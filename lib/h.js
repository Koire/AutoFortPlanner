export const h = (element="div", options={}, children=[]) => {
    const elem = document.createElement(element)
    Object.entries(options).forEach(([key, value]) => {
        if (key.substring(0, 2) === "on" && typeof(value) === "function") {
             elem.addEventListener(key.substring(2).toLowerCase(), value)
        } else {
            elem.setAttribute(key, value)
        }
    })
    const ch = Array.isArray(children) ? children : children === null ? [] : [children]
    ch.map(child => typeof(child) === "string" ? elem.textContent = child : elem.appendChild(child))
    return elem
}
