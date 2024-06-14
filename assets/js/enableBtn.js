/**
 * @function
 */
export function enableBtnSend() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const btnSend = document.getElementById("btn-send");
    let validName = name.validity.valid;
    let validEmail = email.validity.valid;
    let validSubject = subject.validity.valid;
    let validMessage = message.validity.valid;

    if (validName && validEmail && validSubject && validMessage) {
        btnSend.removeAttribute("disabled");
        btnSend.classList.remove("btn-blocked");
    } else {
        btnSend.setAttribute("disabled", "true");
        btnSend.classList.add("btn-blocked");
    }
}