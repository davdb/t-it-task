import React from 'react';
import { useGetUsersQuery } from '../../store/reducers/users/usersApi';
import UsersWithCommentsTable from './_components/UsersWithCommentsTable';

const UsersWithCommentsView = () => {
  const { isLoading, isError } = useGetUsersQuery();

  if (isError) return 'Error';
  if (isLoading) return 'Loading...';

  return <UsersWithCommentsTable />;
};

export default UsersWithCommentsView;
