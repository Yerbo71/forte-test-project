import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ContactsTablePagination } from './contactsTablePagination';
import { Loader } from 'lucide-react';
export function ContactsTable({ data, columns, pageIndex, pageCount, onPageChange, onPageSizeChange, pageSize, isLoading }) {
    const table = useReactTable({
        data,
        columns,
        pageCount,
        state: { pagination: { pageIndex, pageSize: pageSize ?? 10 } },
        manualPagination: true,
        getCoreRowModel: getCoreRowModel()
    });
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "overflow-auto rounded-lg border px-2", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { children: headerGroup.headers.map((header) => (_jsx(TableHead, { children: header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext()) }, header.id))) }, headerGroup.id))) }), _jsx(TableBody, { children: isLoading ? (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "text-center p-4", children: _jsx(Loader, { className: "animate-spin mx-auto" }) }) })) : table.getRowModel().rows.length > 0 ? (table.getRowModel().rows.map((row) => (_jsx(TableRow, { children: row.getVisibleCells().map((cell) => (_jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "text-center p-4", children: "No results." }) })) })] }) }), _jsx(ContactsTablePagination, { pageIndex: pageIndex, pageCount: pageCount, onPageChange: onPageChange, onPageSizeChange: onPageSizeChange ?? (() => { }), pageSize: pageSize ?? 10 })] }));
}
