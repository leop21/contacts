export interface Contact {
    id?: number | string;
    name: string;
    lastName: string;
    email: string;
    phone?: string;
}

export interface Contacts {
    contacts: Array<Contact>;
}
