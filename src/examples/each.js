import _ from 'underscore';

const eachExample = () => {
    //Arrays

    //underscore
    const names = ['tom', 'john', 'ted'];

    _.each(names, (name, index) => console.log('_', name, index));

    //js
    names.forEach((name, index) => console.log('js', name, index));


    //Objects

    //underscore
    const person = { name: 'Tom', age: 21, gender: 'male' };

    _.each(person, (value, key) => console.log('_', key, value));

    //js
    Object.keys(person).forEach(key => console.log('js', key, person[key]));
};

export default eachExample;