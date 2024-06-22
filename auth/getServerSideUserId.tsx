import { auth } from ".";

export const getServerSideUserId = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("Unable to return user id");
  }

  return userId;
};
