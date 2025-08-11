import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { PhoneInput } from '@/components/phone-input.tsx';
const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    phone: Yup.string()
        .matches(/^\+?[0-9\s\-()]{7,}$/, 'Phone number is not valid')
        .required('Phone is required'),
    email: Yup.string().email('Invalid email address')
});
export const ContactsForm = ({ initialValues = { name: '', phone: '', email: '' }, onSubmit, isSubmitting = false }) => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        enableReinitialize: true
    });
    return (_jsxs("form", { onSubmit: formik.handleSubmit, className: "space-y-2", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "name", className: "text-sm font-medium mb-2", children: "Name" }), _jsx(Input, { id: "name", name: "name", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.name, placeholder: "Enter full name" }), formik.touched.name && formik.errors.name && (_jsx("p", { className: "text-red-600 text-sm mt-1 text-start", children: formik.errors.name }))] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "phone", className: "text-sm font-medium mb-2", children: "Phone" }), _jsx(PhoneInput, { id: "phone", name: "phone", onChange: (value) => formik.setFieldValue('phone', value), international: true, value: formik.values.phone, placeholder: "+1 234 567 8900" }), formik.touched.phone && formik.errors.phone && (_jsx("p", { className: "text-red-600 text-sm mt-1 text-start", children: formik.errors.phone }))] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", className: "text-sm font-medium mb-2", children: "Email" }), _jsx(Input, { id: "email", name: "email", type: "email", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.email, placeholder: "email@example.com" }), formik.touched.email && formik.errors.email && (_jsx("p", { className: "text-red-600 text-sm mt-1 text-start", children: formik.errors.email }))] }), _jsxs("div", { className: "flex justify-end gap-2 items-center mt-4", children: [_jsx(Button, { type: "button", variant: "outline", onClick: () => navigate('/'), children: "Back" }), _jsx(Button, { type: "submit", disabled: isSubmitting, children: isSubmitting ? 'Saving...' : 'Save' })] })] }));
};
