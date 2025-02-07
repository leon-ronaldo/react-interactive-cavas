export default function selectElement(event: globalThis.MouseEvent) {
    const canvas = (document.getElementsByClassName("reactive-canvas")[0] as HTMLDivElement);
    const bounds = canvas.getBoundingClientRect();

    const insideXBounds = event.offsetX >= bounds.left && event.offsetX <= bounds.right;
    const insideYBounds = event.offsetX >= bounds.top && event.offsetX <= bounds.bottom;

    if (insideXBounds && insideYBounds) {
        
    }

    return
}