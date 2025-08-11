import { ColumnDef } from '@tanstack/react-table';
import { z } from 'zod';
export declare const schema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
export type Contact = z.infer<typeof schema>;
export declare const contactsTableColumns: () => ColumnDef<Contact>[];
