import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getContactsById, postContact, putContact } from '@/api';
import { Loader } from 'lucide-react';
import { ContactsForm } from '@/pages/contacts/contacts-form/components/contactsForm.tsx';
import { ErrorCard } from '@/components/err-card.tsx';
import { IContactInputData } from '@/api/types';

const ContactsFormPage = () => {
  const { id } = useParams<{ id?: string }>();
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
    mutationFn: (data: IContactInputData) => putContact(contactId!, data),
    onSuccess: () => {
      navigate('/');
    }
  });

  const handleSubmit = (values: IContactInputData) => {
    if (isEditMode && contactId) {
      updateMutation.mutate(values);
    } else {
      createMutation.mutate(values);
    }
  };

  if (isError) {
    return (
      <div className="max-w-xl mx-auto mt-10">
        <ErrorCard message={(error as Error)?.message || 'Error loading contact data.'} />
      </div>
    );
  }

  return (
    <>
      {isEditMode && isLoading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <ContactsForm
          initialValues={
            data
              ? {
                  name: data.data.name,
                  phone: data.data.phone,
                  email: data.data?.email
                }
              : undefined
          }
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default ContactsFormPage;
