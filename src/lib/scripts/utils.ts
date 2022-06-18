export const capFirstLetter = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const isOnSpecial = function (discountDeadline: string) {
    return new Date() < new Date(discountDeadline);
}

export const scrollIntoView = (idToScroll: string) => {
    
    const scrollToElement = document.querySelector(idToScroll)

    if (!scrollToElement){ 
        console.log('element not found', idToScroll)
        return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    scrollToElement.scrollIntoView({
        block: 'nearest',
        behavior: mediaQuery.matches ? 'auto' : 'smooth',
    })
}