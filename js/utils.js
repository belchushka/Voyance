let scrollEnabled = true

let keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

let supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    // scrollEnabled = false
    // window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    // window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    // window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    // window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}


function enableScroll() {
    // scrollEnabled = true
    // window.removeEventListener('DOMMouseScroll', preventDefault, false);
    // window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    // window.removeEventListener('touchmove', preventDefault, wheelOpt);
    // window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

function getChildPosition (element) {
    element = $(element)
    let childPos = element.offset();
    let parentPos = element.parent().offset();
    return {
        top: childPos.top - parentPos.top,
        left: childPos.left - parentPos.left
    }
}