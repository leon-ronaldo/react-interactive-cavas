import { HTMLAttributes, JSX } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {}

export default function CanvasBox(props: BoxProps) : JSX.Element {
    return <div className={` ${props.className ?? ""}`} {...props}>
        
    </div>
}