import { useEffect, useState } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import range from 'utils/range';

const usePaginationManager = (
  page: number,
  totalPageCount: number,
  changePage: (page: number) => AnyAction
) => {
  const dispatch = useAppDispatch();
  const [paginationDotItemLeft, setPaginationDotItemLeft] = useState(false);
  const [paginationDotItemRight, setPaginationDotItemRight] = useState(false);
  const [currentPageNeighbours, setCurrentPageNeighbours] = useState<number[]>(
    []
  );

  useEffect(() => {
    if (page > 0 && page < 5) {
      const neighboursBorder = totalPageCount > 6 ? 6 : totalPageCount;
      if (page > 3) {
        setCurrentPageNeighbours(Array.from(range(page - 2, page + 3)));
        setPaginationDotItemLeft(true);
      } else {
        setPaginationDotItemLeft(false);
        setCurrentPageNeighbours(Array.from(range(2, neighboursBorder)));
      }
      neighboursBorder > 2 && setPaginationDotItemRight(true);
    } else {
      if (page < totalPageCount - 3) {
        setPaginationDotItemRight(true);
        setCurrentPageNeighbours(Array.from(range(page - 2, page + 3)));
      } else {
        setPaginationDotItemRight(false);
        setCurrentPageNeighbours(
          Array.from(range(totalPageCount - 5, totalPageCount))
        );
      }
      setPaginationDotItemLeft(true);
    }
  }, [page, totalPageCount]);

  const handleChangePage = (page: number) => dispatch(changePage(page));

  return {
    paginationDotItemLeft,
    paginationDotItemRight,
    currentPageNeighbours,
    handleChangePage,
  };
};

export default usePaginationManager;
