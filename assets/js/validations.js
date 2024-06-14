/**
 * @const
 * @const ErrorMessages
 */
const messageHeader = "Por favor, asegúrese de verificar los siguientes requerimientos: <br>";

/**
 * @const 
 * @const ErrorMessages
 */

const messageMaxChar = "No se permiten más de 50 carácteres.";

/**
 * @const 
 */
const errorTypes = [
    "valueMissing",
    "patternMismatch",
    "tooShort",
    "tooLong",
    "typeMismatch",
];

/**
 * @param {Object} input 
 * @function
 * @function showErrorMessage
 */
export function validate(input) {
    /**
     * @const {string}
     */
    const inputType = input.dataset.field;
    if (validators[inputType]) {
        validators[inputType](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("form__fields--incorrect");
        input.parentElement.querySelector(".form__span--error").innerHTML = "";
    } else {
        input.parentElement.classList.add("form__fields--incorrect");
        input.parentElement.querySelector(".form__span--error").innerHTML =
            showErrorMessage(inputType, input);
    }
}

/**
 * @param {string} inputType 

 * @param {Object} input 

 * @returns 

 * @function
 */
function showErrorMessage(inputType, input) {
    let message = "";
    errorTypes.forEach((error) => {
        if (input.validity[error]) {
            message = errorMessages[inputType][error];
        }
    });
    return message;
}

/**
 * @const
 */
const errorMessages = {
    name: {
        valueMissing: "El campo no puede estar vacío.",
        patternMismatch:
            messageHeader +
            "Debes incluir por lo menos un apellido. <br>",
        tooShort: "El valor mínimo requerido de carácteres es de 3.",
        tooLong: messageMaxChar,
    },
    email: {
        valueMissing: "El campo no puede estar vacío.",
        patternMismatch: "El formato admitido debe ser en formato user@domain.com",
        typeMismatch:
            "Solo formato e-mail es permitido",
    },
    subject: {
        valueMissing: "El campo no puede estar vacío.",
        patternMismatch:
            messageHeader +
            "No se admiten números ni carácteres especiales. <br>" +
            "No tener más de un espacio en blanco entre palabras",
        tooShort: "Mínimo 6 carácteres",
        tooLong: messageMaxChar,
    },
    message: {
        valueMissing: "El campo no puede estar vacío.",
        tooLong: "Máximo 300 carácteres",
        tooShort: "Mínimo 20 carácteres",
    }
};

const validators = {
};