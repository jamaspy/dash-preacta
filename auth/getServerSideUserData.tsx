import { auth } from ".";

export const getServerSideUserData = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    throw new Error("Unable to return user id");
  }

  return user;
};
