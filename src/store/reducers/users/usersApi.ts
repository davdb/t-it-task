import jsonplaceholderService from '../../services/jsonplaceholderService';
import { User } from './_types/User';

export const usersApi = jsonplaceholderService.injectEndpoints({
  endpoints(builder) {
    return {
      getUsers: builder.query<User[], void>({
        query: () => ({
          url: '/users',
          method: 'get',
        }),
      }),
    };
  },
});

export const { useGetUsersQuery } = usersApi;
