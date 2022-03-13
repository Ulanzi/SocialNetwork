/*функция про обязательное поле*/
export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

/*это thunk*/
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`; /*если длинна больше опр количества символов покажем сноску*/
    return undefined; /*в противном случае покажем undefined*/
}