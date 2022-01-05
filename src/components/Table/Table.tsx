import React, { FunctionComponent } from 'react';
import TableTemplate from '../../templates/TableTemplate';
import TableHeader from './_components/TableHeader';
import TableBody from './_components/TableBody';

const Table: FunctionComponent = () => {
  return (
    <TableTemplate>
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader />
        <TableBody />
      </table>
    </TableTemplate>
  );
};

export default Table;
