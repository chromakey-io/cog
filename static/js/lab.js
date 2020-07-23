let radius = 40;

function get_started(event) {
    console.log('click');
        let canvas = document.getElementById('canvas');

        var el = document.documentElement;
        var fullScreen = el.requestFullscreen
          || el.webkitRequestFullScreen
          || el.mozRequestFullScreen
          || el.msRequestFullscreen;
        
        fullScreen.call(canvas);

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas(){
        console.log('resize');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let context = canvas.getContext('2d');

        function random(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        function get_point(circles) {
            const width = canvas.width;
            const height = canvas.height;

            const point = {
                x: random(width - 200) + 100,
                y: random (height - 200) + 100
            }

            if(!collides(circles, point)) return point;
            else{
                return get_point(circles);
            }
        }

        function collides(circles, point) {
            for(const circle of circles){ 
                //if ((x > circle.x - circle.radius * 2 && x < circle.x + circle.radius * 2) && 
                //   (y > circle.y - circle.radius * 2 && y < circle.y + circle.radius * 2))
                if (Math.sqrt((point.x - circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius * 2)
                    return true;
            }
            return false;
        }

        function get_id(i){
            return i * 2; //Math.pow(i, 2); // do stuff here later
        }

        let circles = [];
        let trail = [];
        for (i = 0; i < 8; i++){
            const point = get_point(circles);
            circles.push({
                id: get_id(i),
                correct: false,
                x: point.x, 
                y: point.y, 
                radius: radius,
                color: 'rgb(48, 77, 115)',
                path: new Path2D()
            });
        }

        circles[0].correct = true;

        function draw() {
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = "rgb(60,60,60)";
            context.fillRect(0, 0, canvas.width, canvas.height);

            for(const [index, circle] of trail.entries()){
                if(index==0)
                    context.moveTo(circle.x, circle.y);
                else
                    context.lineTo(circle.x, circle.y);
            }
            context.lineWidth = 4;
            context.strokeStyle = 'rgb(36, 36, 36)';
            context.stroke();

            for(const circle of circles){
                //context.beginPath();
                circle.path.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);

                context.fillStyle = circle.color;
                context.fill(circle.path);

                context.fillStyle = 'rgb(230, 230, 230)';
                context.font = '24px lato, sans-serif';
                let text = context.measureText(circle.id);
                context.fillText(circle.id, circle.x - text.width/2.0, circle.y + 24/3); //  number/letter

            };
        }

        draw();

        function intersects(point, circle) {
            return Math.sqrt((point.x - circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
        }
        
        function click_handler(event) {
            const point = {
                x: event.clientX,
                y: event.clientY
            };

            for(const i in circles) { 
                if (intersects(point, circles[i])) {
                    if (circles[i].correct == true) {
                        circles[i].correct = false;
                        let next = parseInt(i) + 1;
                        if (circles.length != next)
                            circles[next].correct = true;
                        circles[i].color = 'rgb(24, 140, 119)';
                        trail.push(circles[i]);
                        draw();
                    } else {
                        circles[i].color = 'rgb(191, 137, 0)';
                        trail.push(circles[i]);
                        draw();

                        context.font = '72px lato, sans-serif';
                        let text = context.measureText("Failure");

                        context.fillText("Failure", canvas.width/2.0 - text.width/2.0, 200);
                        canvas.removeEventListener('click', click_handler);
                        // stop test
                    }
                }
            }
        }

        canvas.addEventListener('click', click_handler);
    }

}

let start = document.getElementById('start')
start.addEventListener('mouseup', get_started);
start.addEventListener('touchend', get_started);
window.onerror = function(msg, url, linenumber){
    console.log('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
}