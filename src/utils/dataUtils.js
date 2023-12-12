function splitStringToArr(string) {
    return string.split(/(\r\n|\r|\n)/g);
}

function formatArrToMatrix(array) {
    return array
        .filter((row) => row.trim().length !== 0)
        .map((row) => row.split(",").map(trimString));
}

function trimString(string) {
    return string.trim();
}

function sanitizeArr(array) {
    return array.map((row) => {
        return row.map(trimString);
    });
}

export { splitStringToArr, formatArrToMatrix, sanitizeArr };