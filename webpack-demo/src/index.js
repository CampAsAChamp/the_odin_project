// Explicitly requires lodash to be present, and binds it as _ (no global scope pollution)
import _ from "lodash";
// Import our function
import myName from "./myName";

function component() {
    var element = document.createElement("div");

    // use your function!
    element.innerHTML = myName("Cody");
    return element;

    /*
    const element = document.createElement("div");

    // Loadash, now imported by this script
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
    */
}

document.body.appendChild(component());
