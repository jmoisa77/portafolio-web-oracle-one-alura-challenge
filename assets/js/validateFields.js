import { validate } from "./validations.js";

const validateFields = () => {
    const fields = document.querySelectorAll("[data-field]");
    fields.forEach((field) => {
        field.addEventListener("blur", (field) => {
            validate(field.target);
        });
    });
}

export const clearFields = () => {
    const fields = document.querySelectorAll("[data-field]");
    fields.forEach((field) => {
        field.value = "";
    });
}

export default validateFields;