import { Comment } from 'store/reducers/comments/_types/Comment';

export type CommentsWithTotalCounts = {
  comments: Comment[];
  totalCount: number;
};
