import { useContext } from "react";
import { CanvasContext } from "../contexts/canvasContext";

export default function useCanvasContextValues() {
    const context = useContext(CanvasContext);

    if (!context) {
        throw new Error("Canvas is not initialized. Please wrap your components with Reactive Canvas.");
    }

    return context; // context contains both `elements` and `setElements`
}