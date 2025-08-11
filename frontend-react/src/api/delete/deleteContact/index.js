import axios from 'axios';
import { CONTACTS_URL } from '@/api/url';
export const deleteContact = async ({ id }) => {
    const res = await axios.delete(`${CONTACTS_URL}/${id}`);
    return res.data;
};
