import { ElementStruct, ElementTypes } from "../types/componentProperties";
import useCanvasContextValues from "./contextUtils";
import { generateUniqueId } from "./generateId";
import useCanvas from "./useCanvas";

const spawnOriginOffset = 10

export default function useAddCanvasBox() {
    const { elements, setElements, spawnOrigin, setSpawnOrigin } = useCanvasContextValues();
    const canvas = useCanvas();

    return () => {
        if (!canvas) return;

        const canvasBounds = canvas.getBoundingClientRect();
        const canvasCenter = { x: canvasBounds.width / 2, y: canvasBounds.height / 2 };

        const isPositionOccupied = elements.some(
            (element) => element.posX === spawnOrigin.x && element.posY === spawnOrigin.y
        );

        if (!isPositionOccupied) {
            setSpawnOrigin({ x: spawnOrigin.x + spawnOriginOffset, y: spawnOrigin.y + spawnOriginOffset });

            const id = generateUniqueId();

            setElements((prevElements: ElementStruct[]) => [
                ...prevElements,
                {
                    type: ElementTypes.box,
                    id: id,
                    bgColor: "#212121",
                    borderRadius: 0,
                    shadow: "",
                    zIndex: 1,
                    padding: 0,
                    margin: 0,
                    width: canvasBounds.width / 6,
                    height: canvasBounds.width / 6,
                    posX: spawnOrigin.x + spawnOriginOffset,
                    posY: spawnOrigin.y + spawnOriginOffset,
                    selected: false,
                }
            ]);
        }
    }
}
