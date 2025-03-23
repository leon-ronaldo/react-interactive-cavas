import { HTMLAttributes, JSX } from "react";
import { DynamicSizing, ElementStruct } from "../types/componentProperties";

interface BoxProps {
    props?: HTMLAttributes<HTMLDivElement>,
    elementStruct: ElementStruct
}

export function CanvasBox(args: BoxProps): JSX.Element {
    const { elementStruct, props } = args;

    const elementStyles: React.CSSProperties = {
        position: "absolute",
        left: `${elementStruct.posX}px`,
        top: `${elementStruct.posY}px`,
        zIndex: elementStruct.zIndex,
        backgroundColor: elementStruct.bgColor,
        borderRadius: `${elementStruct.borderRadius}px`,
        boxShadow: elementStruct.shadow,
        padding: `${elementStruct.padding}px`,
        margin: `${elementStruct.margin}px`,
        width: typeof elementStruct.width === "number" ? `${elementStruct.width}px` : getDynamicWidth(elementStruct.width),
        height: typeof elementStruct.height === "number" ? `${elementStruct.height}px` : getDynamicHeight(elementStruct.height),
        ...(props?.style || {}),
    };

    return <div className={` ${props?.className ?? ""}`} {...props} style={elementStyles} id={elementStruct.id}></div>;
}

function getDynamicWidth(value: DynamicSizing): string {
    switch (value) {
        case DynamicSizing.flexible:
            return "auto";
        case DynamicSizing.expanded:
            return "100%";
        case DynamicSizing.full:
            return "100vw";
        default:
            return "auto";
    }
}

function getDynamicHeight(value: DynamicSizing): string {
    switch (value) {
        case DynamicSizing.flexible:
            return "auto";
        case DynamicSizing.expanded:
            return "100%";
        case DynamicSizing.full:
            return "100vh";
        default:
            return "auto";
    }
}
