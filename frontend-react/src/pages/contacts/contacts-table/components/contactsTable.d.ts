import { ColumnDef } from '@tanstack/react-table';
interface DataTableProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
    pageIndex: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    pageSize?: number;
    isLoading?: boolean;
}
export declare function ContactsTable<T>({ data, columns, pageIndex, pageCount, onPageChange, onPageSizeChange, pageSize, isLoading }: DataTableProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
