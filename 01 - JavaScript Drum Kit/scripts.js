let Drum = (function () {

    // Cache DOM
    let $keys = document.querySelectorAll('.key');

    // Play sound if sound matches the pressed key in keyboard
    _playSound = (e) => {
        const $audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const $key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if ($audio) {
            $audio.currentTime = 0;
            $audio.play();
            $key.classList.add('playing')
        }
    }

    //remove playing class when transition ended
    _removeTransition = (e) => {
        let $el = e.target;
        if (e.propertyName !== 'transform') return;
        $el.classList.remove('playing');
    }

    $keys.forEach(key => key.addEventListener('transitionend', _removeTransition))

    window.addEventListener('keydown', _playSound)

})();