export const userNameIcon = (name: string) => {
    if(!name) return ""
    const nameArray = name?.toLocaleUpperCase().split(" ");
    const firstChar = nameArray[0].charAt(0);
    const lastChar = nameArray[1]?.charAt(0);
    return `${firstChar}${lastChar ? lastChar : ""}`
}