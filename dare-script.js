"use strict";

var animationRunning = false;

// removeClass from an element
function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' +
            className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

//addClass to an element
function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}


/*
 Event listener to toggle animation
 */

function toggle_animation() {
    var i;
    var packet;
    var thisPacket;

    if (animationRunning === true) {
        for (i = 1; i < 11; i++) {
            thisPacket = "." + "demand-planning" + "-" + i;
            packet = document.querySelector(thisPacket);
            addClass(packet, "pause-animation");
            removeClass(packet, "start-automation");
            console.log("pausing " + thisPacket);
        }
    } else {
        for (i = 1; i < 11; i++) {
            thisPacket = "." + "demand-planning" + "-" + i;
            packet = document.querySelector(thisPacket);
           // packet = document.querySelector(".demand-planning-1");
            removeClass(packet, "pause-animation");
            addClass(packet, "start-automation");
            console.log("restarting " + thisPacket);
        }
    }
    animationRunning = !animationRunning;
}




