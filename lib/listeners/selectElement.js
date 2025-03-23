var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import insideBounds from "../utils/bounds";
import useCanvasContextValues from "../utils/contextUtils";
export default function selectElement(event) {
    var _a = useCanvasContextValues(), elements = _a.elements, setElements = _a.setElements;
    var canvas = document.getElementById("reactive-canvas");
    if (!canvas || !insideBounds(canvas, event))
        return;
    var mouseOverElements = elements.filter(function (item) {
        var htmlElement = document.getElementById(item.id);
        return htmlElement ? insideBounds(htmlElement, event) : false;
    });
    if (mouseOverElements.length === 0)
        return;
    var selectedElement = mouseOverElements.reduce(function (highest, item) {
        return item.zIndex > highest.zIndex ? item : highest;
    });
    setElements(function (prevElements) {
        return prevElements.map(function (element) { return (__assign(__assign({}, element), { selected: element.id === selectedElement.id })); });
    });
    elements.forEach(function (element) {
        var elem = document.getElementById(element.id);
        if (elem) {
            if (element.id === selectedElement.id) {
                elem.classList.add("selected");
            }
            else {
                elem.classList.remove("selected");
            }
        }
    });
}
