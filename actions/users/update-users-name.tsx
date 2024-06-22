"use server";

import { auth } from "@/auth";
import { XataClient } from "@/xata/client";
import { NextauthUsersRecord } from "@/xata/xata";
import { SelectedPick } from "@xata.io/client";

export const updateUsersName = async (
  name: string
): Promise<Readonly<SelectedPick<NextauthUsersRecord, ["*"]>>> => {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new Error("You need to be logged in to update your name");
    }

    const id = session?.user?.id;
    const trimName = name.trim();
    const updatedUser = await XataClient.db.nextauth_users.update(id, {
      name: trimName,
    });

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log("User ERROR", error);
    throw new Error("Could not get you your users, sorry.");
  }
};
