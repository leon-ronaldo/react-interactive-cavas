import useCanvasContextValues from "./contextUtils";

function generateUniqueId(): string {
    const { elements } = useCanvasContextValues()

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id: string;

    do {
        id = Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    } while (elements.filter((element) => element.id === id).length > 0);

    return id;
}

export { generateUniqueId }
