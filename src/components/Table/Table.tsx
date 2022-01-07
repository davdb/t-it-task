import React, { FunctionComponent } from 'react';
import TableTemplate from '../../templates/TableTemplate';
import TableHeader from './_components/TableHeader';
import TableBody from './_components/TableBody';
import UserWithComments from '../../store/reducers/users/_types/UsersWithComments';

type Props = {
  headers: string[];
  data: UserWithComments[];
};

const Table: FunctionComponent<Props> = ({ headers, data }) => {
  return (
    <TableTemplate>
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader headers={headers} />
        <TableBody data={data} />
      </table>
    </TableTemplate>
  );
};

export default Table;
