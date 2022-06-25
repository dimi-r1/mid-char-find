/**
 * Fetches a random word from random-words-api.
 */
export const getRandomWord = async () => {
    // todo: error handling
    const res = await fetch("https://random-words-api.vercel.app/word");
    const data = await res.json();
    return data[Object.keys(data)[0]].word.toLowerCase() as string;
};

const isOdd = (number: number) => number % 2 === 1;

/**
 *
 * @param word a word.
 * @returns the string split into 3 parts as an object with left, middle and center.
 * @example "hello" becomes {left: "he", middle: "l", right: "lo"}
 * "rabbit" becomes {left: "ra", middle: "bb", right: "it"}
 */
export const extractWordParts = (word: string) => {
    let position;
    let length;

    if (isOdd(word.length)) {
        position = word.length / 2;
        length = 1;
    } else {
        position = word.length / 2 - 1;
        length = 2;
    }

    const wordParts = {
        left: word.substring(0, position),
        middle: word.substring(position, position + length),
        right: word.substring(position + length, word.length),
    };

    return wordParts;
};
