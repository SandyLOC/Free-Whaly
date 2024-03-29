/*-------------------------------Moving background--------------------------------*/

const backgroundImage = {
    x: 0,
    speed: -1,

    move() {
        this.x += this.speed;
        this.x %= canvas.width;
    },

    draw: function (img) {
        ctx.drawImage(img, this.x, 0, canvasWidth, canvasHeight);
        if (this.speed < 0) {
            ctx.drawImage(img, this.x + canvas.width, 0, canvasWidth, canvasHeight);
        } else {
            ctx.drawImage(img, this.x - this.img.width, 0, canvasWidth, canvasHeight);
        }
    },
};