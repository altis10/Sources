


export function isInteger(input: string) {
    return input?.match(/^\d+$/) ?? false;
}

export function convertStringToNumberArray(input: string): number[] {

    const elm = input.split(' ');
    let numbers: number[] = [];

    elm.forEach((n) => {
        if (isInteger(n)) {
            numbers.push(parseInt(n));
        } else {
            throw('One element in entry data is not number!!');
        }
    });
    return numbers;
}