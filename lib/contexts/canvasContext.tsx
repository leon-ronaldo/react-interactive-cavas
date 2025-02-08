import React, { ReactNode, createContext, useEffect, useState } from "react";
import { ElementStruct } from "../types/componentProperties";
import useCanvas from "../utils/useCanvas";

interface Coordinates { x: number, y: number }

export const CanvasContext = createContext<{
    elements: ElementStruct[];
    setElements: React.Dispatch<React.SetStateAction<ElementStruct[]>>;
    spawnOrigin: Coordinates
    setSpawnOrigin: React.Dispatch<React.SetStateAction<Coordinates>>
} | null>(null);

const CanvasProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
    const [elements, setElements] = useState<Array<ElementStruct>>([])
    const [spawnOrigin, setSpawnOrigin] = useState<Coordinates>({x: 0, y: 0})

    useEffect(() => {
        const canvas = useCanvas()
        const canvasBounds = canvas.getBoundingClientRect()
        setSpawnOrigin({x: canvasBounds.width / 2, y: canvasBounds.height / 2})
    })

    return <CanvasContext.Provider value={{ elements, setElements, spawnOrigin, setSpawnOrigin }}>
        {children}
    </CanvasContext.Provider>
}

export default CanvasProvider;