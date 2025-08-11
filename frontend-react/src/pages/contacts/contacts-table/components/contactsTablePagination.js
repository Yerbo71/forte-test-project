import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from '@tabler/icons-react';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
export function ContactsTablePagination({ pageIndex, pageCount, pageSize, onPageChange, onPageSizeChange }) {
    const [localPageSize, setLocalPageSize] = useState(pageSize);
    useEffect(() => {
        setLocalPageSize(pageSize);
    }, [pageSize]);
    const handlePageSizeChange = (value) => {
        const newSize = Number(value);
        setLocalPageSize(newSize);
        onPageSizeChange(newSize);
    };
    return (_jsxs("div", { className: "flex items-center justify-between p-4", children: [_jsxs("div", { className: "hidden items-center gap-2 sm:flex", children: [_jsx(Label, { htmlFor: "rows-per-page", className: "text-sm font-medium", children: "Rows per page:" }), _jsxs(Select, { value: String(localPageSize), onValueChange: handlePageSizeChange, children: [_jsx(SelectTrigger, { size: "sm", className: "w-20", id: "rows-per-page", children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { side: "top", children: [10, 20, 30, 40, 50].map((size) => (_jsx(SelectItem, { value: String(size), children: size }, size))) })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => onPageChange(0), disabled: pageIndex === 0, "aria-label": "Go to first page", children: _jsx(IconChevronsLeft, {}) }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => onPageChange(pageIndex - 1), disabled: pageIndex === 0, "aria-label": "Go to previous page", children: _jsx(IconChevronLeft, {}) }), _jsxs("span", { className: "px-4 text-sm font-medium", children: ["Page ", pageIndex + 1, " of ", pageCount] }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => onPageChange(pageIndex + 1), disabled: pageIndex >= pageCount - 1, "aria-label": "Go to next page", children: _jsx(IconChevronRight, {}) }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => onPageChange(pageCount - 1), disabled: pageIndex >= pageCount - 1, "aria-label": "Go to last page", children: _jsx(IconChevronsRight, {}) })] })] }));
}
