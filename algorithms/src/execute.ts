import * as dotenv from "dotenv";
const result = dotenv.config();
if (result.error) {
    console.log('Error loading the environment variables, aborting...');
    process.exit(1);
}

import * as fs from 'fs';
import { convertStringToNumberArray, isInteger } from './utils/utils';
import { readFromFile, readJsonFile } from "./readFromFile";
import { insertionSort_1 } from "./insertion-sort";

const algorithm: string = process.argv[2];

let sortEntryData = '';
let path: string = '';

console.log("Hello World!!");

switch(algorithm) {
    case 'insertion-sort':
        path = 'D:/WorkingSources/Sources/algorithms/src/initial-data/sort-entry.data';
        break;
}

readFromFile(path)
.then((data) => {
    console.log(insertionSort_1(convertStringToNumberArray(data)));
})
.catch((error) => {
    console.error('Error:', error);
})
.finally(() => {
    console.log('Finally executed!!!');
});

// console.log(insertionSort_1(convertStringToNumberArray(entryData)));

