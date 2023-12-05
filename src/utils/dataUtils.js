function splitStringToArr(string) {
    return string.split("\r\n");
}

function formatArrToMatrix(arr) {
    return arr
        .filter((row) => row.trim().length !== 0)
        .map((row) => row.split(',').map((cell) => cell.trim()));
}

function sanitizeArr(arr) {
    return arr.map((row) => {
        return row.map((cell) => cell.trim());
    })
}

export {
    splitStringToArr,
    formatArrToMatrix,
    sanitizeArr
}