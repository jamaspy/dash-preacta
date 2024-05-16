import { User } from "./user.model";

export interface Contact {
  contactId: number;
  firstName: string;
  lastName: string;
  position: string;
  salutation: string;
  unsubscribed: boolean;
  email: string;
  phone: string;
  mobile: string;
  inactive: boolean;
  status: {
    statusId: number;
    name: string;
    active: boolean;
    default: boolean;
  };
  owner: User;
}
