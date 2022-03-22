export const capFirstLetter = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}  

export const isOnSpecial = function(discountDeadline: string) {
    return new Date() < new Date(discountDeadline);
}