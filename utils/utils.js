export function calculateTextWidth_HOME(itemLength) {
    if (itemLength === 1) {
        return itemLength * 35;
    } else if (itemLength > 1 && itemLength <= 2) {
        return itemLength * 25;
    } else if (itemLength === 3) {
        return itemLength * 22;
    } else if (itemLength === 4) {
        return itemLength * 21;
    } else if (itemLength === 5) {
        return itemLength * 20.5;
    } else if (itemLength === 6) {
        return itemLength * 20;
    } else if (itemLength === 7) {
        return itemLength * 19.5;
    } else if (itemLength === 8) {
        return itemLength * 19;
    } else if (itemLength === 9) {
        return itemLength * 18.8;
    } else if (itemLength === 10) {
        return itemLength * 18.6;
    } else if (itemLength === 11) {
        return itemLength * 18.4;
    } else if (itemLength === 12) {
        return itemLength * 18.3;
    } else if (itemLength >= 13 && itemLength <= 17) {
        return itemLength * 18;
    } else if (itemLength >= 18 && itemLength <= 21) {
        return itemLength * 17.7;
    } else if (itemLength >= 22 && itemLength <= 25) {
        return itemLength * 17.6;
    } else {
        return itemLength * 17;
    }
}

export function calculateTextWidth_MENU(itemLength) {
    const widthTable = {
        1: 35,
        2: 25,
        3: 19,
        4: 17.7,
        5: 16,
        6: 16,
        7: 15.5,
        8: 15.5,
        9: 15,
        10: 14.9,
        11: 14.7,
        12: 13.8,
        13: 13,
        14: 13,
        15: 13,
        16: 13,
        17: 13,
        18: 13.3,
        19: 13.3,
        20: 13.3,
        21: 13.3,
        22: 13.8,
        23: 13.8,
        24: 13.8,
        25: 13.8,
    };

    const width = widthTable[itemLength] || widthTable[25];

    return itemLength * width;
}
