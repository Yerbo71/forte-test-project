import axios from 'axios';
import { CONTACTS_URL } from '@/api/url';
import { IActionResponse, IContactIdParams } from '@/api/types';

export const deleteContact = async ({ id }: IContactIdParams): Promise<IActionResponse> => {
  const res = await axios.delete<IActionResponse>(`${CONTACTS_URL}/${id}`);
  return res.data;
};
