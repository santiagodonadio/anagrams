export function checkAnagram(word1, word2){

    const normalize = (str) => str.replace(/\sg/, '').toLowerCase()

    const sorted1 = normalize(word1).split('').sort().join('');

    const sorted2 = normalize(word2).split('').sort().join('');

    return sorted1 == sorted2;
}

