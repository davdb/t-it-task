import { User } from 'store/reducers/users/_types/User';

export type UserInList = Omit<User, 'address' | 'company'> & {
  address: string;
  company: string;
};
