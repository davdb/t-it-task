import { Address } from './Address';
import { Company } from './Company';

export type User = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  company: Company;
};
