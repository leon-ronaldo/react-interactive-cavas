var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ElementTypes } from "../types/componentProperties";
import useCanvasContextValues from "./contextUtils";
import { generateUniqueId } from "./generateId";
import useCanvas from "./useCanvas";
var spawnOriginOffset = 10;
export default function useAddCanvasBox() {
    var _a = useCanvasContextValues(), elements = _a.elements, setElements = _a.setElements, spawnOrigin = _a.spawnOrigin, setSpawnOrigin = _a.setSpawnOrigin;
    var canvas = useCanvas();
    return function () {
        if (!canvas)
            return;
        var canvasBounds = canvas.getBoundingClientRect();
        var canvasCenter = { x: canvasBounds.width / 2, y: canvasBounds.height / 2 };
        var isPositionOccupied = elements.some(function (element) { return element.posX === spawnOrigin.x && element.posY === spawnOrigin.y; });
        if (!isPositionOccupied) {
            setSpawnOrigin({ x: spawnOrigin.x + spawnOriginOffset, y: spawnOrigin.y + spawnOriginOffset });
            var id_1 = generateUniqueId();
            setElements(function (prevElements) { return __spreadArray(__spreadArray([], prevElements, true), [
                {
                    type: ElementTypes.box,
                    id: id_1,
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
            ], false); });
        }
    };
}
