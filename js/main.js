// var circle = new ProgressBar.Circle('#container', {
//     color: '#cccccc',
//     strokeWidth: 5,
//     trailColor: '#333',
//     trailWidth: 4,
//     duration: 2000,
//     warnings: true
// });

// circle.animate(4, {
//     duration: 2000
// }, function() {
//     circle.set(0.7);
//     var interval = setTimeout(function() {
//         circle.animate(1.2);
//     }, 800);
// }); // Number from 0.0 to 1.0

$(document).ready(function() {
    $('#circle').circleProgress({
        startAngle: 4.71,
        value: 0.5,
        lineCap: "round",
        size: 100,
        fill: {
            gradient: ["black"]
        }
    });

    $('#circle1').circleProgress({
        startAngle: 4.71,
        value: 0.75,
        lineCap: "round",
        size: 100,
        fill: {
            gradient: ["red"]
        }
    });
});