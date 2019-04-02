let Clock = (function () {

    // Cache DOM
    let $secondsHand = document.querySelector('.second-hand'),
        $minHand = document.querySelector('.min-hand'),
        $hourHand = document.querySelector('.hour-hand');

    _setDate = () => {
        let now = new Date();

        // Seconds
        const seconds = now.getSeconds();
        const secondsDegree = ((seconds / 60) * 360) + 90;
        $secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

        // Mins
        const mins = now.getMinutes();
        const minsDegree = ((mins / 60) * 360) + 90;
        $minHand.style.transform = `rotate(${minsDegree}deg)`;

        // hours
        const hour = now.getHours();
        const hourDegree = ((hour / 12) * 360) + 90;
        $hourHand.style.transform = `rotate(${hourDegree}deg)`;
    }

    setInterval(_setDate, 1000)
})();