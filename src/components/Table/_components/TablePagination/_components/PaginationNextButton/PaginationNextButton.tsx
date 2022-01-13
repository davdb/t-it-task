import { AnyAction } from '@reduxjs/toolkit';
import ArrowRight from 'icons/ArrowRight';

type Props = {
  page: number;
  isLastPage: boolean;
  handleChangePage: (page: number) => AnyAction;
};

const PaginationNextButton = ({
  page,
  isLastPage,
  handleChangePage,
}: Props) => (
  <div
    className={`flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer ${
      isLastPage ? 'invisible' : 'visible'
    }`}
    onClick={() => handleChangePage(page + 1)}
  >
    <p className="text-sm font-medium leading-none mr-3 visibilit">Next</p>
    <ArrowRight />
  </div>
);

export default PaginationNextButton;
