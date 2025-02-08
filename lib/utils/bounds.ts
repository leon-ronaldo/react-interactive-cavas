export default function insideBounds(element: HTMLElement, event: globalThis.MouseEvent) {

    const bounds = element.getBoundingClientRect();

    const insideXBounds = event.offsetX >= bounds.left && event.offsetX <= bounds.right;
    const insideYBounds = event.offsetX >= bounds.top && event.offsetX <= bounds.bottom;

    return insideXBounds && insideYBounds
}