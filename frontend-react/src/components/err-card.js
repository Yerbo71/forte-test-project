import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ErrorCard = ({ message }) => {
    return (_jsxs("div", { className: "bg-red-50 border border-red-400 text-red-800 p-4 rounded-md", children: [_jsx("p", { className: "font-semibold", children: "Error" }), _jsx("p", { children: message })] }));
};
