// JavaScript source code
window.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
    var top = event.pageY - (cursor.clientHeight / 2);
    var left = event.pageX - (cursor.clientWidth / 2);
    cursor.style.top = top + 'px';
    cursor.style.left = left + 'px';
}