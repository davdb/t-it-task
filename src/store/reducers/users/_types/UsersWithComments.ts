import { Comment } from '../../comments/_types/Comment';
import { User } from './User';

type UserWithComments = User & { comments?: Comment[]; postsIds?: number[] };

export default UserWithComments;
