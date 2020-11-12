export const AutoInitM = () => {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(() => M.AutoInit(), 1);
    } else {
        document.addEventListener("DOMContentLoaded", () => M.AutoInit());
    }
}

export const makeAnObserver = (element, fn) => {
    const observer = new MutationObserver(() => {
        if(document.contains(element)) {
            fn()
            observer.disconnect()
        }
    })
    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
    return observer
}
