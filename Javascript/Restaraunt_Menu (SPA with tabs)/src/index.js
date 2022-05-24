import { homePageLoad } from "./homePageLoad";
import { contactPageLoad } from "./contactPageLoad";
import { menuPageLoad } from "./menuPageLoad";

function clearCurrentPageContent() {
    const content = document.querySelector("#content");

    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

const homeTab = document.querySelector("#home-tab");
const menuTab = document.querySelector("#menu-tab");
const contactUsTab = document.querySelector("#contact-us-tab");

homeTab.addEventListener("click", () => {
    clearCurrentPageContent();
    homePageLoad();
});
menuTab.addEventListener("click", () => {
    clearCurrentPageContent();
    menuPageLoad();
});
contactUsTab.addEventListener("click", () => {
    clearCurrentPageContent();
    contactPageLoad();
});

console.log("Restaraunt page is working");
