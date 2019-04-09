(function () {
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = '#BADA55'
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 100;

    let isDrawing = false,
        lastX = 0,
        lastY = 0,
        hue = 0,
        direction = true;

    _draw = ({ offsetX, offsetY }) => {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        if (!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(offsetX, offsetY)
        ctx.stroke();
        [lastX, lastY] = [offsetX, offsetY];
        hue++;
        if (hue >= 360) {
            hue = 0;
        }
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction;
        }
        if (direction) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }
    }

    canvas.addEventListener('mousemove', _draw)
    canvas.addEventListener('mousedown', ({ offsetX, offsetY }) => {
        isDrawing = true;
        [lastX, lastY] = [offsetX, offsetY];
    })
    canvas.addEventListener('mouseup', () => isDrawing = false)
    canvas.addEventListener('mouseout', () => isDrawing = false)
})();