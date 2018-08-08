import _ from 'underscore';

const mapExample = () => {
    //Arrays

    //underscore
    const numbers = [1, 2, 3];

    const mapped = _.map(numbers, (value, index, items) => {
        items[index] *= 2; //mutate current array
        return value * 3; //map to new array
    });
    console.log('numbers', numbers);
    console.log('mapped', mapped);

    //js
    const numbersJs = [1, 2, 3];

    const mappedJs = numbersJs.map((value, index, items) => {
        items[index] *= 2;
        return value * 3;
    });
    console.log('numbersJs', numbersJs);
    console.log('mappedJs', mappedJs);

    //Objects

    //underscore
    const numbersObj = { one: 1, two: 2, three: 3 };

    const mappedObj = _.map(numbersObj, (val, key, obj) => {
        obj[key] *= 2;
        return { 'value': val, 'key': key };
    });
    console.log('numbersObj', numbersObj);
    console.log('mappedObj', mappedObj);

    //js
    const numbersObjJs = { one: 1, two: 2, three: 3 };

    const mappedObjJs = Object.keys(numbersObjJs).map((key, index, keys) => {
        const result = { 'value': numbersObjJs[key], 'key': key };
        numbersObjJs[key] *= 2;
        return result;
    });
    console.log('numbersObjJs', numbersObjJs);
    console.log('mappedObjJs', mappedObjJs);
};

export default mapExample;