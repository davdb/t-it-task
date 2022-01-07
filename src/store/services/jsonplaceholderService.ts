import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../queries/axiosBaseQuery';
import ExternalAPIs from '../types/ExternalAPIs';

const jsonplaceholderService = createApi({
  reducerPath: 'jsonplaceholder',
  baseQuery: axiosBaseQuery({
    baseUrl: ExternalAPIs.JSONPLACEHOLDER,
  }),
  endpoints: () => ({}),
});

export default jsonplaceholderService;
