import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getContactsById, postContact, putContact } from '@/api';
import { Loader } from 'lucide-react';
import { ContactsForm } from '@/pages/contacts/contacts-form/components/contactsForm.tsx';
import { ErrorCard } from '@/components/err-card.tsx';
const ContactsFormPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = !!id;
    const contactId = id ? parseInt(id, 10) : undefined;
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['contact', contactId],
        queryFn: () => getContactsById({ id: contactId }),
        enabled: isEditMode
    });
    const createMutation = useMutation({
        mutationFn: postContact,
        onSuccess: () => {
            navigate('/');
        }
    });
    const updateMutation = useMutation({
        mutationFn: (data) => putContact(contactId, data),
        onSuccess: () => {
            navigate('/');
        }
    });
    const handleSubmit = (values) => {
        if (isEditMode && contactId) {
            updateMutation.mutate(values);
        }
        else {
            createMutation.mutate(values);
        }
    };
    if (isError) {
        return (_jsx("div", { className: "max-w-xl mx-auto mt-10", children: _jsx(ErrorCard, { message: error?.message || 'Error loading contact data.' }) }));
    }
    return (_jsx(_Fragment, { children: isEditMode && isLoading ? (_jsx("div", { className: "flex items-center justify-center", children: _jsx(Loader, {}) })) : (_jsx(ContactsForm, { initialValues: data
                ? {
                    name: data.data.name,
                    phone: data.data.phone,
                    email: data.data?.email
                }
                : undefined, onSubmit: handleSubmit })) }));
};
export default ContactsFormPage;
