import React, { HTMLAttributes, JSX, ReactNode } from "react";
import CanvasProvider from "../contexts/canvasContext";
import useCanvasContextValues from "../utils/contextUtils";
import { ElementTypes } from "../types/componentProperties";
import CanvasBox from "./Box";

interface CanvasProps {
    props: HTMLAttributes<HTMLDivElement>,
    children: ReactNode
}

const ReactiveCanvas: React.FC<CanvasProps> = (args) => {
    const { elements } = useCanvasContextValues()

    return <CanvasProvider>
        <div {...args.props} className={`${args.props.className || ''}`} id="reactive-canvas">
            {args.children}
            {elements.map((element, key) => {
                if (element.type === ElementTypes.box) {
                    return <CanvasBox elementStruct={element} />
                }
            })}
        </div>
    </CanvasProvider>;
}

export default ReactiveCanvas
