import { Address } from 'store/reducers/users/_types/Address';
import { Company } from 'store/reducers/users/_types/Company';

interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;

  constructor(user: UserType) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.address = new Address(user.address);
    this.phone = user.phone;
    this.website = user.website;
    this.company = new Company(user.company);
  }
}
