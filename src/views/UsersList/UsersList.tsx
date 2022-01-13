import { useAppSelector } from 'store/hooks/useAppSelector';
import { useGetUsersQuery } from 'store/reducers/users/usersApi';
import UsersTable from 'views/UsersList/_components/UsersTable';

const UsersList = () => {
  const { page, limit } = useAppSelector((store) => store.usersListSlice);
  const { isLoading, isError } = useGetUsersQuery(
    { page, limit },
    { refetchOnMountOrArgChange: true }
  );

  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <h1>'Error'</h1>;

  return <UsersTable />;
};

export default UsersList;
