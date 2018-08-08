import _ from 'underscore';

const reduceExample = () => {
    //Arrays

    //underscore
    const numbers = [1, 2, 3];

    const sum = _.reduce(numbers, (acc, cur, index, origin) => {
        console.log('cur', cur);
        return acc + cur
    });
    console.log('sum', sum);
    //first value assigned to total on init
    //can use initial value as third param (after function)

    const sum2 = _.reduceRight(numbers, (acc, cur, index, origin) => {
        console.log('cur', cur);
        return acc + cur
    });
    console.log('sum2', sum2);

    //works with strings
    const names = ['tom', 'rob', 'den'];

    const output = _.reduce(names, (acc, cur, index, origin) => {
        return `${acc} "${cur.toUpperCase()}"`;
    }, '');
    console.log('output:', output);

    const outputRight = _.reduceRight(names, (acc, cur, index, origin) => {
        return `${acc} "${cur.toUpperCase()}"`;
    }, '');
    console.log('outputRight:', outputRight);


    //JS
    const numbersJs = [1, 2, 3];

    const sumJs = numbersJs.reduce((acc, cur, index, origin) => {
        console.log('cur', cur);
        return acc + cur
    });
    console.log('sumJs', sumJs);

    const sumRightJs = numbersJs.reduceRight((acc, cur, index, origin) => {
        console.log('cur', cur);
        return acc + cur
    });
    console.log('sumRightJs', sumRightJs);

    //Objects

    //underscore
    const numbersObj = { one: 1, two: 2, three: 3 };

    const sumObj = _.reduce(numbersObj, (acc, val, key, origin) => {
        acc.sum = acc.sum + val;
        acc.text = `${acc.text} ${key}`.trim();
        return acc;
    }, { sum: 0, text: '' });
    console.log('sumObj', sumObj);

    const sumRightObj = _.reduceRight(numbersObj, (acc, val, key, origin) => {
        acc.sum = acc.sum + val;
        acc.text = `${acc.text} ${key}`.trim();
        return acc;
    }, { sum: 0, text: '' });
    console.log('sumRightObj', sumRightObj);

    //JS
    const numbersObjJs = { one: 1, two: 2, three: 3 };

    const sumObjJs = Object.keys(numbersObjJs).reduce((acc, key, index, origin) => {
        acc.sum = acc.sum + numbersObjJs[key];
        acc.text = `${acc.text} ${key}`.trim();
        return acc;
    }, { sum: 0, text: '' });
    console.log('sumObjJs', sumObjJs);

    const sumRightObjJs = Object.keys(numbersObjJs).reduce((acc, key, index, origin) => {
        acc.sum = acc.sum + numbersObjJs[key];
        acc.text = `${acc.text} ${key}`.trim();
        return acc;
    }, { sum: 0, text: '' });
    console.log('sumRightObjJs', sumRightObjJs);
};

export default reduceExample;