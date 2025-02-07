export enum DynamicSizing {
    flexible = "flexible",
    expanded = "expanded",
    full = "full",
}

export type ElementStruct = {
    bgColor: string,
    borderRadius: number,
    shadow: string,
    zIndex: number,
    padding: number,
    margin: number,
    width: number | DynamicSizing,
    height: number | DynamicSizing,
    posX: number,
    posY: number
}