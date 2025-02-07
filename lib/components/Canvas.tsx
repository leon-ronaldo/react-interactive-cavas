import React, { HTMLAttributes, JSX, ReactNode } from "react";
import CanvasProvider from "../contexts/canvasContext";

interface CanvasProps {
    props: HTMLAttributes<HTMLDivElement>,
    children: ReactNode
}

const ReactiveCanvas: React.FC<CanvasProps> = (args) => {
    return <div {...args.props} className={`reactive-canvas ${args.props.className || ''}`}>
        <CanvasProvider>
            {args.children}
        </CanvasProvider>
    </div>;
}

export default ReactiveCanvas
