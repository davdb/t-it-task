import { AnyAction } from '@reduxjs/toolkit';

type Props = {
  page: number;
  isActive: boolean;
  handleChangePage: (page: number) => AnyAction;
};

const PaginationItem = ({ page, isActive, handleChangePage }: Props) => (
  <p
    className={`text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent ${
      isActive ? 'border-indigo-400' : 'hover:border-indigo-400'
    } pt-3 mr-4 px-2`}
    onClick={() => handleChangePage(page)}
  >
    {page}
  </p>
);

export default PaginationItem;
