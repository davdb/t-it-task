import React from 'react';
import { useGetUsersQuery } from '../../store/reducers/users/usersApi';
import UsersWithCommentsTable from './_components/UsersWithCommentsTable';

const UsersWithCommentsView = () => {
  const { isLoading, isError } = useGetUsersQuery();

  if (isError) return <h1>'Error'</h1>;
  if (isLoading) return <h1>'Loading...'</h1>;

  return <UsersWithCommentsTable />;
};

export default UsersWithCommentsView;
