import insideBounds from "../utils/bounds";
import useCanvasContextValues from "../utils/contextUtils";

export default function selectElement(event: MouseEvent) {
    const { elements, setElements } = useCanvasContextValues();
    const canvas = document.getElementById("reactive-canvas") as HTMLDivElement;

    if (!canvas || !insideBounds(canvas, event)) return;

    const mouseOverElements = elements.filter((item) => {
        const htmlElement = document.getElementById(item.id);
        return htmlElement ? insideBounds(htmlElement, event) : false;
    });

    if (mouseOverElements.length === 0) return;

    const selectedElement = mouseOverElements.reduce((highest, item) =>
        item.zIndex > highest.zIndex ? item : highest
    );

    setElements((prevElements) =>
        prevElements.map((element) => ({
            ...element,
            selected: element.id === selectedElement.id,
        }))
    );

    elements.forEach((element) => {
        const elem = document.getElementById(element.id);
        if (elem) {
            if (element.id === selectedElement.id) {
                elem.classList.add("selected");
            } else {
                elem.classList.remove("selected");
            }
        }
    });
}
