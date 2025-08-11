import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { closestCenter, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight, IconDotsVertical } from '@tabler/icons-react';
import { flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { z } from 'zod';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent } from '@/components/ui/tabs';
export const schema = z.object({
    id: z.number(),
    name: z.string(),
    phone: z.string(),
    email: z.string()
});
const columns = [
    {
        id: 'id',
        header: () => null,
        cell: ({ row }) => {
            return _jsx("div", { className: "flex items-center justify-center", children: row.original.id });
        }
    },
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => {
            return (_jsx("div", { className: "w-32 flex items-center gap-2", children: _jsx(Badge, { variant: "outline", className: "text-muted-foreground px-1.5", children: row.original.name }) }));
        },
        enableHiding: false
    },
    {
        accessorKey: 'phone',
        header: 'Phone',
        cell: ({ row }) => (_jsx("div", { className: "w-32 flex items-center gap-2", children: _jsx(Badge, { variant: "outline", className: "text-muted-foreground px-1.5", children: row.original.phone }) }))
    },
    {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => (_jsx("div", { className: "w-32 flex items-center gap-2", children: _jsx(Badge, { variant: "outline", className: "text-muted-foreground px-1.5", children: row.original.email || 'N/A' }) }))
    },
    {
        id: 'actions',
        cell: () => (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", className: "data-[state=open]:bg-muted text-muted-foreground flex size-8", size: "icon", children: [_jsx(IconDotsVertical, {}), _jsx("span", { className: "sr-only", children: "Open menu" })] }) }), _jsxs(DropdownMenuContent, { align: "end", className: "w-32", children: [_jsx(DropdownMenuItem, { children: "Edit" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { variant: "destructive", children: "Delete" })] })] }))
    }
];
function DraggableRow({ row }) {
    const { transform, transition, setNodeRef, isDragging } = useSortable({
        id: row.original.id
    });
    return (_jsx(TableRow, { "data-state": row.getIsSelected() && 'selected', "data-dragging": isDragging, ref: setNodeRef, className: "relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80", style: {
            transform: CSS.Transform.toString(transform),
            transition: transition
        }, children: row.getVisibleCells().map((cell) => (_jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }));
}
export function DataTable({ data, pagination: parentPagination, totalPages, totalCount, onPaginationChange }) {
    const [rowSelection, setRowSelection] = React.useState({});
    const [internalPagination, setInternalPagination] = React.useState({
        pageIndex: 0,
        pageSize: 10
    });
    const pagination = parentPagination !== undefined ? parentPagination : internalPagination;
    const setPagination = onPaginationChange !== undefined ? onPaginationChange : setInternalPagination;
    const sortableId = React.useId();
    const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));
    const dataIds = React.useMemo(() => data?.map(({ id }) => id) || [], [data]);
    const table = useReactTable({
        data,
        columns,
        state: {
            rowSelection,
            pagination
        },
        getRowId: (row) => row.id.toString(),
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onPaginationChange: (updaterOrValue) => {
            const newPagination = typeof updaterOrValue === 'function' ? updaterOrValue(pagination) : updaterOrValue;
            setPagination(newPagination);
        },
        manualPagination: true,
        pageCount: totalCount ? Math.ceil(totalCount / pagination.pageSize) : 0,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues()
    });
    return (_jsxs(Tabs, { defaultValue: "outline", className: "w-full flex-col justify-start gap-6", children: [_jsxs(TabsContent, { value: "outline", className: "relative flex flex-col gap-4 overflow-auto px-4 lg:px-6", children: [_jsx("div", { className: "overflow-hidden rounded-lg border", children: _jsx(DndContext, { collisionDetection: closestCenter, modifiers: [restrictToVerticalAxis], sensors: sensors, id: sortableId, children: _jsxs(Table, { children: [_jsx(TableHeader, { className: "bg-muted sticky top-0 z-10", children: table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { children: headerGroup.headers.map((header) => {
                                                return (_jsx(TableHead, { colSpan: header.colSpan, children: header.isPlaceholder
                                                        ? null
                                                        : flexRender(header.column.columnDef.header, header.getContext()) }, header.id));
                                            }) }, headerGroup.id))) }), _jsx(TableBody, { className: "**:data-[slot=table-cell]:first:w-8", children: table.getRowModel().rows?.length ? (_jsx(SortableContext, { items: dataIds, strategy: verticalListSortingStrategy, children: table.getRowModel().rows.map((row) => (_jsx(DraggableRow, { row: row }, row.id))) })) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }) })) })] }) }) }), _jsxs("div", { className: "flex items-center justify-between px-4", children: [_jsxs("div", { className: "text-muted-foreground hidden flex-1 text-sm lg:flex", children: [table.getFilteredSelectedRowModel().rows.length, " of", ' ', table.getFilteredRowModel().rows.length, " row(s) selected."] }), _jsxs("div", { className: "flex w-full items-center gap-8 lg:w-fit", children: [_jsxs("div", { className: "hidden items-center gap-2 lg:flex", children: [_jsx(Label, { htmlFor: "rows-per-page", className: "text-sm font-medium", children: "Rows per page" }), _jsxs(Select, { value: `${table.getState().pagination.pageSize}`, onValueChange: (value) => {
                                                    table.setPageSize(Number(value));
                                                }, children: [_jsx(SelectTrigger, { size: "sm", className: "w-20", id: "rows-per-page", children: _jsx(SelectValue, { placeholder: table.getState().pagination.pageSize }) }), _jsx(SelectContent, { side: "top", children: [10, 20, 30, 40, 50].map((pageSize) => (_jsx(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize))) })] })] }), _jsxs("div", { className: "flex w-fit items-center justify-center text-sm font-medium", children: ["Page ", table.getState().pagination.pageIndex + 1, " of ", table.getPageCount()] }), _jsxs("div", { className: "ml-auto flex items-center gap-2 lg:ml-0", children: [_jsxs(Button, { variant: "outline", className: "hidden h-8 w-8 p-0 lg:flex", onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage(), children: [_jsx("span", { className: "sr-only", children: "Go to first page" }), _jsx(IconChevronsLeft, {})] }), _jsxs(Button, { variant: "outline", className: "size-8", size: "icon", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: [_jsx("span", { className: "sr-only", children: "Go to previous page" }), _jsx(IconChevronLeft, {})] }), _jsxs(Button, { variant: "outline", className: "size-8", size: "icon", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: [_jsx("span", { className: "sr-only", children: "Go to next page" }), _jsx(IconChevronRight, {})] }), _jsxs(Button, { variant: "outline", className: "hidden size-8 lg:flex", size: "icon", onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage(), children: [_jsx("span", { className: "sr-only", children: "Go to last page" }), _jsx(IconChevronsRight, {})] })] })] })] })] }), _jsx(TabsContent, { value: "past-performance", className: "flex flex-col px-4 lg:px-6", children: _jsx("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" }) }), _jsx(TabsContent, { value: "key-personnel", className: "flex flex-col px-4 lg:px-6", children: _jsx("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" }) }), _jsx(TabsContent, { value: "focus-documents", className: "flex flex-col px-4 lg:px-6", children: _jsx("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" }) })] }));
}
