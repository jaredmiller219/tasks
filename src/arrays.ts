/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    // if the array is empty, return an empty array
    if (numbers.length === 0) {
        return [];
    }

    // if the array has one element, return the number twice
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }

    // return the first and last number of the array
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    // return the array of numbers as tripled numbers
    return numbers.map((val: number): number => val * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // return the array of strings as numbers, or 0 if they cannot be parsed
    return numbers.map((val: string): number => parseInt(val, 10) || 0);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // return the array of strings as numbers, removing the "$" symbol
    return amounts.map(
        (val: string): number => parseInt(val.replace("$", ""), 10) || 0
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return (
        messages

            // remove any messages that end in "?"
            .filter((val: string): boolean => !val.endsWith("?"))

            // Return the messages that end in "!", in uppercase
            .map((val: string): string =>
                val.endsWith("!") ? val.toUpperCase() : val
            )
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    // Return the number of words that are less than 4 letters long
    return words.filter((val: string): boolean => val.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // If colors is empty, return true
    if (colors.length === 0) {
        return true;
    }

    // return true if ALL the colors are either "red", "blue", or "green"
    return colors.every(
        (val: string): boolean =>
            val === "red" || val === "blue" || val === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // If addends is empty, return "0=0"
    if (addends.length === 0) {
        return "0=0";
    }

    // add each number in the array to the sum
    const sum = addends.reduce(
        (acc: number, val: number): number => acc + val,
        0
    );

    // Return the sum, followed by the string "=". Then join the addends with "+" and append it to the string
    return `${sum}=${addends.join("+")}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // Initialize the sum to 0
    let sum = 0;

    // Find the index of the first negative number
    const negativeIndex = values.findIndex((val) => val < 0);

    // Create a copy of the original array
    const result = values.slice();

    if (negativeIndex === -1) {
        // If there are no negative numbers, calculate the sum of all values
        sum = values.reduce((runningSum, val) => runningSum + val, 0);

        // return the original array with the sum appended to the end, values are unpacked
        return [...values, sum];
    }

    // Calculate the sum of all values before the first negative number
    result.slice(0, negativeIndex).forEach((val) => (sum += val));

    // Insert the sum after the first negative number
    result.splice(negativeIndex + 1, 0, sum);

    // return the modified array
    return result;
}
