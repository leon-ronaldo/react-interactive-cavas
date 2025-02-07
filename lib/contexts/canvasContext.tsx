import React, { Dispatch, JSX, ReactNode, SetStateAction, createContext, useState } from "react";
import { ElementStruct } from "../types/componentProperties";

interface CanvasContextStruct {
    elements: Array<ElementStruct> | undefined,
    setElements?: Dispatch<SetStateAction<ElementStruct[] | undefined>>
}

const CanvasContext = createContext<CanvasContextStruct>({ elements: [], setElements: undefined })

const CanvasProvider: React.FC<{children?: ReactNode}> = ({children}) => {
    const [elements, setElements] = useState<Array<ElementStruct>>()

    return <CanvasContext.Provider value={{elements, setElements}}>
        {children}
    </CanvasContext.Provider>
}

export {CanvasContext}
export default CanvasProvider;