import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import axiosBaseQuery from 'store/queries/axiosBaseQuery';

import ExternalAPIs from 'store/types/ExternalAPIs';
import Reducers from 'store/types/Reducers';

const jsonplaceholderService = createApi({
  reducerPath: Reducers.JSONPLACEHOLDER,
  baseQuery: fetchBaseQuery({
    baseUrl: ExternalAPIs.JSONPLACEHOLDER,
  }),
  endpoints: () => ({}),
});

export default jsonplaceholderService;
