function Mario() {
    this.x = 0;
    this.y = 0;
    this.move = function (direction) {
        switch (direction) {
            case 0:
                var myMario = document.getElementById('mymario');
                var top = myMario.style.top;
                top = parseInt(top.substr(0, top.length - 2));
                myMario.style.top = (top - 2) + 'px';
                break;
            case 1:
                var myMario = document.getElementById('mymario');
                var left = myMario.style.left;
                left = parseInt(left.substr(0, left.length - 2));
                myMario.style.left = (left + 2) + 'px';
                break;
            case 2:
                var myMario = document.getElementById('mymario');
                var top = myMario.style.top;
                top = parseInt(top.substr(0, top.length - 2));
                myMario.style.top = (top + 2) + 'px';
                break;
            case 3:
                var myMario = document.getElementById('mymario');
                var left = myMario.style.left;
                left = parseInt(left.substr(0, left.length - 2));
                myMario.style.left = (left - 2) + 'px';
                break;
        }
    }
}

var mario = new Mario();

function marioMove(direct) {
    mario.move(direct);
}