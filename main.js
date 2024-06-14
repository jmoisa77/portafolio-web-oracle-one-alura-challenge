import { enableBtnSend } from "./assets/js/enableBtn.js";
import menu from "./assets/js/menu.js";
import validateFields, { clearFields } from "./assets/js/validateFields.js";

(() => {
    /**
     * @const
     */
    const contactForm = document.querySelector(".form");

    menu();
    validateFields();
    enableBtnSend();

    const validateBtnForm = (event) => {
        const element = event.target;
        if (element && element.tagName == 'INPUT') {
            enableBtnSend();
        } else if (element && element.tagName == 'TEXTAREA') {
            enableBtnSend();
        }
    }

    contactForm.addEventListener("keyup", validateBtnForm);
    window.addEventListener("DOMContentLoaded", clearFields);
})();