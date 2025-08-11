import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { AppLayout } from './layout/appLayout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsTablePage from '@/pages/contacts/contacts-table/contactsTablePage.tsx';
import ContactsFormPage from '@/pages/contacts/contacts-form/contactsFormPage.tsx';
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(AppLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ContactsTablePage, {}) }), _jsx(Route, { path: "/contact-form", element: _jsx(ContactsFormPage, {}) }), _jsx(Route, { path: "/contact-form/:id", element: _jsx(ContactsFormPage, {}) })] }) }) }));
}
export default App;
