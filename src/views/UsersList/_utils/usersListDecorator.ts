import { User } from 'store/reducers/users/_types/User';
import { Address } from 'store/reducers/users/_types/Address';
import { Company } from 'store/reducers/users/_types/Company';
import { UserInList } from 'views/UsersList/_types/UserInList';

const usersListDecorator = (users: User[]): UserInList[] =>
  users.map((user) => {
    return {
      ...user,
      address: new Address(user.address).toString(),
      company: new Company(user.company).toString(),
    };
  });

export default usersListDecorator;
