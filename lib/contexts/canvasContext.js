import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useState } from "react";
import useCanvas from "../utils/useCanvas";
export var CanvasContext = createContext(null);
var CanvasProvider = function (_a) {
    var children = _a.children;
    var _b = useState([]), elements = _b[0], setElements = _b[1];
    var _c = useState({ x: 0, y: 0 }), spawnOrigin = _c[0], setSpawnOrigin = _c[1];
    useEffect(function () {
        var canvas = useCanvas();
        var canvasBounds = canvas.getBoundingClientRect();
        setSpawnOrigin({ x: canvasBounds.width / 2, y: canvasBounds.height / 2 });
    }, []);
    return _jsx(CanvasContext.Provider, { value: { elements: elements, setElements: setElements, spawnOrigin: spawnOrigin, setSpawnOrigin: setSpawnOrigin }, children: children });
};
export default CanvasProvider;
