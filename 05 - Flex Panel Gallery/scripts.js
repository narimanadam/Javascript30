(function () {
    const $panels = document.querySelectorAll('.panel');

    _toggleOpen = ({ currentTarget }) => {
        currentTarget.classList.toggle('open');
    }

    _toggleActive = ({ currentTarget, propertyName }) => {
        if (propertyName.includes('flex')) {
            currentTarget.classList.toggle('open-active');
        }
    }

    $panels.forEach(panel => panel.addEventListener('click', _toggleOpen));
    $panels.forEach(panel => panel.addEventListener('transitionend', _toggleActive));
})();