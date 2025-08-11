import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { z } from 'zod';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IconDotsVertical } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteContact } from '@/api';
export const schema = z.object({
    id: z.number(),
    name: z.string(),
    phone: z.string(),
    email: z.string()
});
export const contactsTableColumns = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const deleteMutation = useMutation({
        mutationFn: deleteContact,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
        }
    });
    return [
        {
            accessorKey: 'id',
            header: 'ID',
            cell: ({ getValue }) => _jsx("div", { className: "text-start", children: getValue() })
        },
        {
            accessorKey: 'name',
            header: 'Name',
            cell: ({ getValue }) => (_jsx("div", { className: "flex items-center justify-start gap-2", children: _jsx(Badge, { variant: "outline", className: "text-muted-foreground px-1.5", children: getValue() }) }))
        },
        {
            accessorKey: 'phone',
            header: 'Phone',
            cell: ({ getValue }) => (_jsx("div", { className: "flex items-center justify-start gap-2", children: _jsx(Badge, { variant: "outline", className: "text-muted-foreground px-1.5", children: getValue() }) }))
        },
        {
            accessorKey: 'email',
            header: 'Email',
            cell: ({ getValue }) => (_jsx("div", { className: "flex items-center justify-start gap-2", children: _jsx(Badge, { variant: "outline", className: "text-muted-foreground px-1.5", children: getValue() || 'N/A' }) }))
        },
        {
            id: 'actions',
            header: '',
            cell: ({ row }) => {
                const id = row.original.id;
                return (_jsx("div", { className: "flex items-center justify-end gap-2", children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", size: "icon", className: "text-muted-foreground", children: [_jsx(IconDotsVertical, {}), _jsx("span", { className: "sr-only", children: "Open menu" })] }) }), _jsxs(DropdownMenuContent, { align: "end", className: "w-32", children: [_jsx(DropdownMenuItem, { onClick: () => navigate(`/contact-form/${row.original.id}`), children: "Edit" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { className: "text-destructive", onClick: () => deleteMutation.mutate({ id: row.original.id }), children: "Delete" })] })] }) }));
            }
        }
    ];
};
