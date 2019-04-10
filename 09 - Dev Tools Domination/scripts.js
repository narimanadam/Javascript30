(function () {
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    _makeGreen = () => {
        const p = document.querySelector('p');
        p.style.color = '#BADA55';
        p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello')

    // Interpolated
    console.log('Hello I am a %s', 'Nariman');
    console.log(`Hello I am a ${name}`, 'Nariman')

    // Styled
    console.log('%c Great text', 'font-size: 50px; background: red')
    // warning!
    console.warn('ooh nooo')

    // Error :|
    console.error('Error');

    // Info
    console.info('this is Info');

    // Testing
    // This will fire only when the condition is not true
    const p = document.querySelector('p')
    console.assert(p.classList.contains('ouch'), 'This is wrong man')

    // clearing
    console.clear();

    // Viewing DOM Elements
    // Will show all the living method on that element
    console.dir(p);
    console.clear();

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`)
        console.log(`This is ${dog.name}`)
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`) // Should be the same as the value passed to console.group
    })
    // counting
    console.count('wes');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/narimanadam')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data'); // Should be the same as the value passed to console.time('fetching data)
            console.log(data)
        })

    // table
    console.table(dogs)

})();