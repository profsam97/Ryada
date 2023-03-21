export const truncate = (string : string, length : number)  : string => {
    const stringLength = string.length;
    if (length > stringLength) return string
    const newString : string = string.slice(0, length);

    return newString + '...'
}
