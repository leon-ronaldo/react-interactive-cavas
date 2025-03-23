import useCanvasContextValues from "./contextUtils";
function generateUniqueId() {
    var elements = useCanvasContextValues().elements;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var id;
    do {
        id = Array.from({ length: 8 }, function () { return chars[Math.floor(Math.random() * chars.length)]; }).join("");
    } while (elements.filter(function (element) { return element.id === id; }).length > 0);
    return id;
}
export { generateUniqueId };
