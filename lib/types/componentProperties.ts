export enum DynamicSizing {
    flexible = "flexible",
    expanded = "expanded",
    full = "full",
}

export enum ElementTypes {
    box = "box",
    circle = "circle",
    text = "text"
}

export type ElementStruct = {
    id: string,
    type: ElementTypes
    bgColor: string,
    borderRadius: number,
    shadow: string,
    zIndex: number,
    padding: number,
    margin: number,
    width: number | DynamicSizing,
    height: number | DynamicSizing,
    posX: number,
    posY: number,
    selected: boolean,
}