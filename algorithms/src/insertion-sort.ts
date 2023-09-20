


export function insertionSort_1(entry: number[]) {
    var buff: number[] = [];
    
    for(let i=0; i<entry.length; i++) {
        buff[i] = entry[i];
        if(i != 0 && entry[i] < buff[i-1]) {
            for(let j=buff.length; j>0; j--) {
                if (buff[j] < buff[j-1]) {
                    buff[j] = buff[j-1];
                    buff[j-1] = entry[i];
                }
            }
        }   
    }

    return buff;
}