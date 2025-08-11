import axios from 'axios';
import { CONTACTS_URL } from '@/api/url';
import { IGetAllContactsParams, IGetAllContactsResponse } from '@/api/get/getAllContacts/types.ts';

export const getAllContacts = async ({
  page,
  name,
  limit,
  search,
  phone,
  email
}: IGetAllContactsParams): Promise<IGetAllContactsResponse> => {
  const params = new URLSearchParams();
  if (page) params.append('page', page.toString());
  if (limit) params.append('limit', limit.toString());
  if (search) params.append('search', search.toString());

  const res = await axios.get<IGetAllContactsResponse>(CONTACTS_URL, {
    params
  });
  return res.data;
};
