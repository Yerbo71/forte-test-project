import { z } from 'zod';
export declare const schema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
export declare function DataTable({ data, pagination: parentPagination, totalPages, totalCount, onPaginationChange }: {
    data: z.infer<typeof schema>[];
    pagination?: {
        pageIndex: number;
        pageSize: number;
    };
    totalCount?: number;
    totalPages?: number;
    onPaginationChange?: (pagination: {
        pageIndex: number;
        pageSize: number;
    }) => void;
}): import("react/jsx-runtime").JSX.Element;
