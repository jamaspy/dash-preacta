import { getServerSession } from 'next-auth';
import { authOptions } from '.';

export const getServerSideUserId = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error('Unable to return user id');
  }

  return userId;
};
