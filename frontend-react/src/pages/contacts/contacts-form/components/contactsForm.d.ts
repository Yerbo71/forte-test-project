import React from 'react';
import { IContactInputData } from '@/api/types';
interface ContactsFormProps {
    initialValues?: IContactInputData;
    onSubmit: (values: IContactInputData) => void;
    isSubmitting?: boolean;
}
export declare const ContactsForm: React.FC<ContactsFormProps>;
export {};
