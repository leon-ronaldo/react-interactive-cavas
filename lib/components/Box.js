var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { DynamicSizing } from "../types/componentProperties";
export function CanvasBox(args) {
    var _a;
    var elementStruct = args.elementStruct, props = args.props;
    var elementStyles = __assign({ position: "absolute", left: "".concat(elementStruct.posX, "px"), top: "".concat(elementStruct.posY, "px"), zIndex: elementStruct.zIndex, backgroundColor: elementStruct.bgColor, borderRadius: "".concat(elementStruct.borderRadius, "px"), boxShadow: elementStruct.shadow, padding: "".concat(elementStruct.padding, "px"), margin: "".concat(elementStruct.margin, "px"), width: typeof elementStruct.width === "number" ? "".concat(elementStruct.width, "px") : getDynamicWidth(elementStruct.width), height: typeof elementStruct.height === "number" ? "".concat(elementStruct.height, "px") : getDynamicHeight(elementStruct.height) }, ((props === null || props === void 0 ? void 0 : props.style) || {}));
    return _jsx("div", __assign({ className: " ".concat((_a = props === null || props === void 0 ? void 0 : props.className) !== null && _a !== void 0 ? _a : "") }, props, { style: elementStyles, id: elementStruct.id }));
}
function getDynamicWidth(value) {
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
function getDynamicHeight(value) {
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
