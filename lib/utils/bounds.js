export default function insideBounds(element, event) {
    var bounds = element.getBoundingClientRect();
    var insideXBounds = event.offsetX >= bounds.left && event.offsetX <= bounds.right;
    var insideYBounds = event.offsetX >= bounds.top && event.offsetX <= bounds.bottom;
    return insideXBounds && insideYBounds;
}
