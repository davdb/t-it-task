import { AnyAction } from '@reduxjs/toolkit';
import { TablePagination as TablePaginationProps } from 'store/types/TablePagination';
import PaginationDotItem from 'components/Table/_components/TablePagination/_components/PaginationDotItem';
import PaginationPreviousButton from 'components/Table/_components/TablePagination/_components/PaginationPreviousButton';
import PaginationItem from 'components/Table/_components/TablePagination/_components/PaginationItem';
import PaginationNextButton from 'components/Table/_components/TablePagination/_components/PaginationNextButton';
import PaginationTemplate from 'components/Table/_components/TablePagination/_templates/PaginationTemplate';
import usePaginationManager from 'components/Table/_components/TablePagination/_hooks/usePaginationManager';

type Props = TablePaginationProps & {
  changePage: (page: number) => AnyAction;
};

const TablePagination = ({ page, totalPageCount, changePage }: Props) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPageCount;
  const {
    paginationDotItemLeft,
    paginationDotItemRight,
    currentPageNeighbours,
    handleChangePage,
  } = usePaginationManager(page, totalPageCount, changePage);

  return (
    <PaginationTemplate>
      <PaginationPreviousButton
        page={page}
        isFirstPage={isFirstPage}
        handleChangePage={handleChangePage}
      />
      <div className="sm:flex hidden">
        <PaginationItem
          page={1}
          isActive={isFirstPage}
          handleChangePage={handleChangePage}
        />
        {paginationDotItemLeft && <PaginationDotItem />}
        {currentPageNeighbours.map((neighbourPage) => (
          <PaginationItem
            page={neighbourPage}
            isActive={page === neighbourPage}
            handleChangePage={handleChangePage}
          />
        ))}
        {paginationDotItemRight && <PaginationDotItem />}
        <PaginationItem
          page={totalPageCount}
          isActive={isLastPage}
          handleChangePage={handleChangePage}
        />
      </div>
      <PaginationNextButton
        page={page}
        isLastPage={isLastPage}
        handleChangePage={handleChangePage}
      />
    </PaginationTemplate>
  );
};

export default TablePagination;
