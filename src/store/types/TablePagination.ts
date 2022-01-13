export type TablePagination = {
  page: number;
  limit: number;
  totalPageCount: number; // const totalPageCount = Math.ceil(totalCount / pageSize);
};
