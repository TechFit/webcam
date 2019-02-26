var Motion = require('motion-detect').Motion;
var motion = new Motion();

// img1, img2, img3, img4 created ...
// all img's are strings of RGBA values
// and look like [128,128,128,255,...]

var hasMotion;

hasMotion = motion.detect('./video/Dublin-Cam_1551165159830.jpg');
console.log(hasMotion);
// > false

hasMotion = motion.detect('./video/Dublin-Cam_1551165173899.jpg');
console.log(hasMotion);
// > true

hasMotion = motion.detect('./video/Dublin-Cam_1551165185952.jpg', './video/Dublin-Cam_1551165201782.jpg');
console.log(hasMotion);
// > false