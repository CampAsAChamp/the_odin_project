// Explicitly requires lodash to be present, and binds it as _ (no global scope pollution)
import _ from "lodash";

function component() {
    const element = document.createElement("div");

    // Loadash, now imported by this script
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
}

document.body.appendChild(component());
