import axios from 'axios';
import { CONTACTS_URL } from '@/api/url';
import { IActionResponse, IContactInputData } from '@/api/types';

export const putContact = async (id: number, data: IContactInputData): Promise<IActionResponse> => {
  const response = await axios.put<IActionResponse>(`${CONTACTS_URL}/${id}`, data, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};
