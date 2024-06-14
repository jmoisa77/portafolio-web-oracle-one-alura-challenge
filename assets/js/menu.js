import mediaQueryHorizontalPhone from "./mediaQuery.js";

/**
 * @const
 */
 const body = document.body;

 /**
  * @const
  */
 const scrollUp = "scroll-up";
 /**
  * @const
 */
 const scrollDown = "scroll-down";
 /**
  * @const 
  */
 let scrollUltimo = 0;
 
 const menu = () => {
     visibilityMenu();
     window.addEventListener("resize", visibilityMenu);
     window.addEventListener("scroll", visibilizationMenu);
 }
 
 /**
      * @param {input} inputs
      * Elementos input del DOM en el formulario. 
      * @param {textarea} textArea 
      * Elemento textarea del DOM en el formulario.
      * @returns void.
      * @function mediaQueryHorizontalPhone() Función que devuelve un valor boleano 

      * Eventos para @param inputs

      */
 const visibilityMenu = () => {
     const inputs = document.querySelectorAll("[data-field]");
     const anchoValido = mediaQueryHorizontalPhone();
     if (anchoValido) {
         inputs.forEach((input) => {
             input.addEventListener("focus", hideMenu);
             input.addEventListener("keyup", hideMenu);
             input.addEventListener("blur", showMenu);
         });
     } else {
         inputs.forEach((input) => {
             input.removeEventListener("focus", hideMenu);
             input.removeEventListener("keyup", hideMenu);
             input.removeEventListener("blur", showMenu);
         });
     }
     return;
 }
 
 const visibilizationMenu = () => {
     /**
      * @const
      */
     const actualScroll = window.scrollY;

     if (actualScroll == 0) {
         body.classList.remove(scrollUp);
         return;
     }
 
     if (actualScroll > scrollUltimo && !body.classList.contains(scrollDown)) {
         hideMenu();
     } else if (actualScroll < scrollUltimo && body.classList.contains(scrollDown)) {
         showMenu();
     }

     scrollUltimo = actualScroll;
 }
 
 const showMenu = () => {
     body.classList.add(scrollUp);
     body.classList.remove(scrollDown);
 }
 
 const hideMenu = () => {
     body.classList.add(scrollDown);
     body.classList.remove(scrollUp);
 }

export default menu;