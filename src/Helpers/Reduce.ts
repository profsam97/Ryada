const reduceName = (string: string) : string => {

    const splitedString : string[] = string.split(/(\s+)/);
    const firstName = splitedString[0];
    const secondName = splitedString[2];
    const newString = firstName.slice(0,1) + secondName.slice(0,1)
    return  newString;
}

export default reduceName;