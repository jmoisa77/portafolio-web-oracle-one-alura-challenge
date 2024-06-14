/**
 * @returns {boolean} 
 */
 const mediaQueryHorizontalPhone = () => {
    const mediaQueryPhone = window.matchMedia("(min-width: 667px) and (max-width: 1080px)");
    const validWidth = (mediaQueryPhone.matches);
    return validWidth;
}

export default mediaQueryHorizontalPhone;