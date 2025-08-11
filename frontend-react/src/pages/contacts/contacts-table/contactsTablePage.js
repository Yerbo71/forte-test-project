import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllContacts } from '@/api';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { IconPlus } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { ContactsTable } from '@/pages/contacts/contacts-table/components/contactsTable.tsx';
import { contactsTableColumns } from '@/pages/contacts/contacts-table/components/contactsTableColumns.tsx';
const ContactsTablePage = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState('');
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10
    });
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ['contacts', pagination.pageIndex, pagination.pageSize, search],
        queryFn: () => getAllContacts({ page: pagination.pageIndex + 1, limit: pagination.pageSize, search: search })
    });
    const debouncedSetSearch = React.useMemo(() => debounce((value) => {
        setSearch(value);
        setPagination((prev) => ({ ...prev, pageIndex: 0 }));
    }, 300), []);
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        debouncedSetSearch(value);
    };
    return (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between py-4", children: [_jsx(Input, { placeholder: "Search contacts...", className: "max-w-sm", value: inputValue, onChange: handleSearchChange }), _jsx("div", { className: "flex items-center gap-2", children: _jsxs(Button, { variant: "outline", size: "default", onClick: () => navigate('/contact-form'), children: [_jsx(IconPlus, {}), _jsx("span", { className: "hidden lg:inline", children: "Add Contact" })] }) })] }), _jsx(ContactsTable, { data: data?.data.data || [], columns: contactsTableColumns(), pageIndex: pagination.pageIndex, pageCount: data?.data.totalPages || 0, onPageChange: (newPageIndex) => setPagination((prev) => ({ ...prev, pageIndex: newPageIndex })), onPageSizeChange: (newPageSize) => setPagination((prev) => ({ ...prev, pageSize: newPageSize, pageIndex: 0 })), isLoading: isLoading }), isError && _jsxs("div", { className: "text-red-500", children: ["Error: ", error.message] })] }));
};
export default ContactsTablePage;
