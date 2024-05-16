import { getServerSession } from 'next-auth';
import { authOptions } from '.';

export const getServerSideUserData = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    throw new Error('Unable to return user id');
  }

  return user;
};
