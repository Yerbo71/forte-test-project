import axios from 'axios';
import { CONTACTS_URL } from '@/api/url';
import { IActionResponse, IContactInputData } from '@/api/types';

export const postContact = async (data: IContactInputData): Promise<IActionResponse> => {
  const response = await axios.post<IActionResponse>(CONTACTS_URL, data, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};
