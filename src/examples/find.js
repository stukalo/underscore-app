import _ from 'underscore';
const findExample = () => {
    //Array

    //underscore

    //find
    const numbers = [1, 2, 3, 4, 5, 6];
    const found = _.find(numbers, (val) => {
        return val % 2 === 0;
    });
    console.log('found', found);

    //Js
    const numbersJs = [1, 2, 3, 4, 5, 6];
    const foundJs = numbersJs.find((val) => {
        return val % 2 === 0;
    });
    console.log('foundJs', foundJs);

    //Objects

    //underscore
    const numbersObj = { one: 1, two: 2, three: 3, four: 4 };
    const res = _.find(numbersObj, (val, key) => {
        return val % 2 === 0 && key === 'two';
    });
    console.log('res', res);

    //Js
    const numbersObjJs = { one: 1, two: 2, three: 3, four: 4 };
    const resKeyJs = Object.keys(numbersObjJs).find((key) => {
        return numbersObjJs[key] % 2 === 0 && key === 'two';
    });
    console.log('resJs', numbersObjJs[resKeyJs]);









    //Additional underscore methods
    const people = [
        { name: 'tim', age: 37, gender: 'male'},
        { name: 'sam', age: 23, gender: 'female' },
        { name: 'rob', age: 28, gender: 'male' },
        { name: 'den', age: 42, gender: 'male' },
        { name: 'jay', age: 19, gender: 'female' },
        { name: 'nik', age: 55, gender: 'male' }
    ];

    //findWhere - returns first
    const findWhereRes = _.findWhere(people, { gender: 'male' });
    console.log('findWhereRes', findWhereRes);

    // //where - returns list
    // const whereRes = _.where(people, { gender: 'female' });
    // console.log('whereRes', whereRes);

};

export default findExample;