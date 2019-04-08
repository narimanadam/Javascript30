(function () {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    let cities = [];

    fetch(endpoint)
        .then(res => res.json())
        .then(data => { cities.push(...data); console.log(cities) });

    _findMatches = (wordToMatch, cities) => {
        return cities.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi');
            return place.city.match(regex) || place.state.match(regex)
        })
    }

    _displayMatches = ({ target: { value } }) => {
        const matchArray = _findMatches(value, cities);
        const html = matchArray.map(place => {
            const regex = new RegExp(value, 'gi');
            const cityName = place.city.replace(regex, `<span class="hl">${value}</span>`)
            const stateName = place.state.replace(regex, `<span class="hl">${value}</span>`)
            return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${place.population}</span>
                </li>
            `
        }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', _displayMatches);
    searchInput.addEventListener('keyup', _displayMatches);

})();