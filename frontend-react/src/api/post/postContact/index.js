import axios from 'axios';
import { CONTACTS_URL } from '@/api/url';
export const postContact = async (data) => {
    const response = await axios.post(CONTACTS_URL, data, {
        headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
};
