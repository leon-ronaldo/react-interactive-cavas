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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useCanvasContextValues from "../utils/contextUtils";
import { ElementTypes } from "../types/componentProperties";
import { CanvasBox } from "./Box";
var ReactiveCanvas = function (args) {
    var _a;
    var elements = useCanvasContextValues().elements;
    return _jsxs("div", __assign({}, args.props, { className: "".concat(((_a = args.props) === null || _a === void 0 ? void 0 : _a.className) || ''), id: "reactive-canvas", children: [args.children, elements.map(function (element, key) {
                if (element.type === ElementTypes.box) {
                    return _jsx(CanvasBox, { elementStruct: element });
                }
            })] }));
};
export { ReactiveCanvas };
