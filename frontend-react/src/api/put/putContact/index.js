import axios from 'axios';
import { CONTACTS_URL } from '@/api/url';
export const putContact = async (id, data) => {
    const response = await axios.put(`${CONTACTS_URL}/${id}`, data, {
        headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
};
