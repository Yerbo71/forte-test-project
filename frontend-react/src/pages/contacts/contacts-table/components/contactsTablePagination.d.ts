interface PaginationProps {
    pageIndex: number;
    pageCount: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
}
export declare function ContactsTablePagination({ pageIndex, pageCount, pageSize, onPageChange, onPageSizeChange }: PaginationProps): import("react/jsx-runtime").JSX.Element;
export {};
