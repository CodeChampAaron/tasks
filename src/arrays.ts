/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let New_numbers: number[] = [...numbers];
    if (New_numbers.length === 0) {
        return New_numbers;
    } else if (New_numbers.length === 1) {
        New_numbers.push(New_numbers[0]);
    } else {
        New_numbers = [New_numbers[0], New_numbers[New_numbers.length - 1]];
    }
    return New_numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNums = numbers.map((num: number): number => num * 3);
    return tripledNums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const Integers = numbers.map((num: string): number =>
        isNaN(Number(num)) ? 0 : Number(num)
    );
    return Integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.

export const sliceStrings = (price: string): number => {
    if (isNaN(Number(price.slice(1)))) {
        return 0;
    } else if (price[0] === "$") {
        return Number(price.slice(1));
    } else {
        return Number(price);
    }
};
export const removeDollars = (amounts: string[]): number[] => {
    if (amounts.length === 0) {
        const new_amounts: number[] = [];
        return new_amounts;
    } else {
        const New_amounts = amounts.map(sliceStrings);
        return New_amounts;
    }
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */

export const UpperOrNot = (message: string): string => {
    if (message.charAt(message.length - 1) === "!") {
        return message.toUpperCase();
    } else {
        return message;
    }
};
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let new_messages: string[] = messages.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?" //Im basicallty only adding strings to new list that dont end with ?
    );
    new_messages = new_messages.map(UpperOrNot);
    return new_messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = words.filter((word: string): boolean => word.length < 4);
    return words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const TorF = colors.every(
            (color: string): boolean =>
                color === "red" || color === "blue" || color === "green"
        );
        return TorF;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const ArrStrings = addends.map(String);
        const returnVal: string = String(sum) + "=";
        const ReturnVal = ArrStrings.reduce(
            (currentTotal: string, num: string) => currentTotal + num + "+",
            returnVal
        );
        return ReturnVal.slice(0, -1);
    }
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
    if (values.length === 0) {
        return [0];
    } else {
        const PositiveList = values.every(
            (value: number): boolean => value >= 0
        );
        if (PositiveList) {
            const sum = values.reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            );
            const newVals = [...values, sum];
            return newVals;
        } else {
            const indexOfNeg = values.findIndex(
                (value: number): boolean => value < 0
            );
            let sum = 0;
            for (let i = 0; i < indexOfNeg; i++) {
                sum += values[i];
            }

            const NewVals = [...values];
            NewVals.splice(indexOfNeg + 1, 0, sum);
            return NewVals;
        }
    }

    return [];
}
