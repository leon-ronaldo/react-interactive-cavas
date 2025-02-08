export default function useCanvas(): HTMLElement {
    const canvas = document.getElementById("reactive-canvas");
    if (!canvas) throw Error("No canvas element is found please wrap your components inside Reactive Canvas component")

    return canvas;
}