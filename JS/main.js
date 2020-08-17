const _ = {
//////////////////////////////////////////////
// CLAMP METHOD:
//////////////////////////////////////////////
  clamp(number, lower, upper) {
   return number < lower ?
    lower :
    number > upper ?
    upper :
    number;

    // ANOTHER WAY: ///////////////

    // const lowerClampedValue =
    // Math.max(number, lower);

    // const clampedValue =
    // Math.min(lowerClampedValue, upper);

    // return clampedValue;
  },
//////////////////////////////////////////////
// IN RANGE METHOD:
//////////////////////////////////////////////

  inRange(number, start, end) {
    const a = !end ? 0 : start;
    const b = !end ? start : end;
    const rangeStart = a > b ? b : a;
    const rangeEnd = a > b ? a : b;

    // console.log(`start ${start}`);
    // console.log(`end ${end}`);

    // console.log(`a ${a}`);
    // console.log(`b ${b}`);

    // console.log(`rangeStart ${rangeStart}`);
    // console.log(`rangeEnd ${rangeEnd}`);

    return number >= rangeStart
    && number < rangeEnd;
  },
//////////////////////////////////////////////
// WORDS METHOD:
//////////////////////////////////////////////
  words(string, pattern) {

    !pattern ?
    pattern = ` ` :
    pattern = pattern;

    return typeof string !== `string` ||
    typeof pattern !== `string` ?
    console.log(`Type error. Please enter strings as arguments.`) :
    string.split(pattern);
  },
//////////////////////////////////////////////
// PAD METHOD:
//////////////////////////////////////////////
  pad(stringToPad, length, padderInput) {
    const isLonger = length - stringToPad.length;

    const padder = padderInput ? padderInput : ` `;

    if (isLonger <= 0) {
    console.log(`StringToPad already longer than or equal to desired length`);
    return stringToPad;
    }

    const startPad = Math.floor(isLonger/2);
    const endPad = isLonger - startPad;

    const paddedString =`${padder.repeat(startPad)}${stringToPad}${padder.repeat(endPad)}`;
    return paddedString;
  },
//////////////////////////////////////////////
// HAS METHOD:
//////////////////////////////////////////////
  has(object, key) {
    const isDefined = object[key] !== undefined;
    return isDefined;
  },
//////////////////////////////////////////////
// INVERTED METHOD:
//////////////////////////////////////////////
  invert(object) {

    // const arrayFromEntries =
    // Object.entries(object);

    // const reversed =
    // arrayFromEntries.map(entry => entry.reverse());

    // const newObject = Object.fromEntries(reversed);
    // console.log(newObject);

    // return newObject;

    const invertedObject = {};

    for (const key in object) {
      const oValue = object[key];
      invertedObject[oValue] = key;
    };
    return invertedObject;
  },
//////////////////////////////////////////////
// FIND KEY METHOD:
//////////////////////////////////////////////
  findKey(object, predicate) {
    for (const key in object) {
      if (predicate(object[key])) {
        return key;
      };
    };
  },
//////////////////////////////////////////////
// DROP METHOD:
//////////////////////////////////////////////
  drop(array, number) {
    const startIndex = !number ? 1 : number;

    const droppedArray = array.slice(startIndex);
    //const droppedArray = array.filter((element, index) => element[index] >= startIndex);

    return droppedArray;
  },
//////////////////////////////////////////////
// DROP WHILE METHOD:
//////////////////////////////////////////////
  dropWhile(array, predicate) {
    const dropIndex = array.findIndex(predicate => !predicate);

    const droppedArray = this.drop(array, dropIndex);
    return droppedArray;
  },
//////////////////////////////////////////////
// CHUNK METHOD:
//////////////////////////////////////////////
  chunk(array, length) {
    const start = 0;
    const end = !length ? 1 : length;

    const arrayGroup = [];

    for (let i = 0; i < array.length || array.length > 0; i+= length) {

       const arrayChunk =
       array.splice(start, end);

       arrayGroup.push(arrayChunk);
    };
    return arrayGroup;
  }
};

// Do not write or modify code below this line.
module.exports = _;
