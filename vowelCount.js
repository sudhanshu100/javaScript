//using functions

function checkVowel(str) {
    let count = 0;
    for (const letters of str) {
        if (letters === "a" || letters === "e" || letters === "i" || letters === "o" || letters === "u") {
            count++;
        }
    }
    return(count);
}
