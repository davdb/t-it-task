import Table from 'components/Table';
import TablePagination from 'components/Table/_components/TablePagination/TablePagination';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { changePage } from 'store/reducers/users/usersListSlice';
import usersListDecorator from 'views/UsersList/_utils/usersListDecorator';
import { USERS_LIST_TABLE_HEADERS } from 'views/UsersList/_constants';

const UsersTable = () => {
  const { users, page, limit, totalPageCount } = useAppSelector(
    (store) => store.usersListSlice
  );
  return (
    <>
      <Table
        headers={USERS_LIST_TABLE_HEADERS}
        rows={usersListDecorator(users)}
      />

      <TablePagination
        page={page}
        limit={limit}
        totalPageCount={totalPageCount}
        changePage={changePage}
      />
    </>
  );
};

export default UsersTable;
