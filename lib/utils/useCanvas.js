export default function useCanvas() {
    var canvas = document.getElementById("reactive-canvas");
    if (!canvas)
        throw Error("No canvas element is found please wrap your components inside Reactive Canvas component");
    return canvas;
}
