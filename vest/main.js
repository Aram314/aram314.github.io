// first - store the coords of all the cells for the position check
var matrix = $('.wrapper div').map(function() {
  var e = $(this),
      o = e.offset(),
      w = e.width(),
      h = e.height();

  return {
    top: o.top,
    left: o.left,
    right: o.left + w,
    bottom: o.top + h,
    e: e
  }
}).get();

var currentTarget = $(),
    activeTarget = $();


var touchF = function(e) {
  var touch = e.originalEvent.touches[0];
  currentTarget = getCurrent(
    {
      clientX: touch.clientX,
      clientY: touch.clientY
    }
  );

  // if the touch is in one of the cells and it's disfferent than the last touch cell
  if (currentTarget && currentTarget != activeTarget) {
    activeTarget = currentTarget;
    console.log(currentTarget.html());
    $('#output').append(currentTarget.html() + ' ');
  }
} 

$('.wrapper').bind({
  touchstart: touchF,
  touchmove: touchF
});

function getCurrent(touch) {
  // check if the touch coords are in the position of one of the cells and which one
  var a = matrix.filter(function(obj) {
    var b = (
      touch.clientX > obj.left &&
      touch.clientX < obj.right &&
      touch.clientY < obj.bottom &&
      touch.clientY > obj.top
    );

    return b;
  });

  return a.length > 0 ? a[0].e : null;
}