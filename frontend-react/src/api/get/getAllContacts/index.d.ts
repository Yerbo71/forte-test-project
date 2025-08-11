import { IGetAllContactsParams, IGetAllContactsResponse } from '@/api/get/getAllContacts/types.ts';
export declare const getAllContacts: ({ page, name, limit, search, phone, email }: IGetAllContactsParams) => Promise<IGetAllContactsResponse>;
