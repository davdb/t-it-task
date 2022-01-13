import { AnyAction } from '@reduxjs/toolkit';
import ArrowLeft from 'icons/ArrowLeft';

type Props = {
  page: number;
  isFirstPage: boolean;
  handleChangePage: (page: number) => AnyAction;
};

const PaginationPreviousButton = ({
  page,
  isFirstPage,
  handleChangePage,
}: Props) => (
  <div
    className={`flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer ${
      isFirstPage ? 'invisible' : 'visible'
    }`}
    onClick={() => handleChangePage(page - 1)}
  >
    <ArrowLeft />
    <p className="text-sm ml-3 font-medium leading-none">Previous</p>
  </div>
);

export default PaginationPreviousButton;
