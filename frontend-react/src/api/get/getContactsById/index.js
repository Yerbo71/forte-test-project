import axios from 'axios';
import { CONTACTS_URL } from '@/api/url';
export const getContactsById = async ({ id }) => {
    const res = await axios.get(`${CONTACTS_URL}/${id}`);
    return res.data;
};
