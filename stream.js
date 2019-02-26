var request = require("request");
var MjpegConsumer = require("mjpeg-consumer");
var MotionStream = require("motion-detect").Stream;
var FileOnWrite = require("file-on-write");

var writer = new FileOnWrite({
    path: './video',
    ext: '.jpg',
    filename: function(image) {
        return image.time;
    },
    transform: function(image) {
        return image.data;
    },
    sync: true
});

var consumer = new MjpegConsumer();
var motion = new MotionStream();

var options = {
    url: "https://static.earthcam.com/hof/ireland/dublin/1551165692938_97.jpg",
};

request(options).pipe(consumer).pipe(motion).pipe(writer);