/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const num_len = numbers.length;

    if (num_len === 0) {
        numbers = [];
    } else if (num_len === 1) {
        numbers = [numbers[0], numbers[0]];
    } else {
        numbers = [numbers[0], numbers[num_len - 1]];
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((num: number): number => num * 3);
    numbers = triple;
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const str_num = numbers.map((str: string): number =>
        isNaN(parseInt(str, 10)) ? 0 : parseInt(str, 10)
    );
    return str_num;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const str_num = amounts.map((str: string): number => {
        const dollar = str[0] === "$" ? str.substring(1) : str;
        return isNaN(parseInt(dollar, 10)) ? 0 : parseInt(dollar, 10);
    });
    return str_num;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const remove_question = messages.filter(
        (message: string): boolean => !message.includes("?")
    );
    const filter_str = remove_question.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return filter_str;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortword = words.filter((word: string): boolean => word.length < 4);
    return shortword.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const color_nonexist = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green"
    );

    if (color_nonexist.length === 0) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // Using `reduce` method - awesome!
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    if (addends.length === 0) {
        return "0=0";
    }

    let equation = addends.join("+");
    equation = sum.toString() + "=" + equation;

    return equation;
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
    const value_copy = [...values];
    // Using `reduce` method - awesome!
    const sum = value_copy.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const negative_index = value_copy.findIndex(
        (value: number): boolean => value < 0
    );

    if (negative_index !== -1) {
        const new_sum = value_copy
            .slice(0, negative_index)
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            );
        value_copy.splice(negative_index + 1, 0, new_sum);
    } else {
        value_copy.push(sum);
    }

    return value_copy;
}
