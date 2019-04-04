(function () {

    //Cache DOM
    const $input = document.querySelectorAll('.controls input');

    _handleUpdate = ({ target: { name, value, dataset } }) => {
        const suffix = dataset.sizing || '';
        document.documentElement.style.setProperty(`--${name}`, `${value}${suffix}`)
    }

    $input.forEach(input => input.addEventListener('change', _handleUpdate))
})();