"use server";

import { XataClient } from "@/xata/client";
import { NextauthUsersRecord } from "@/xata/xata";
import { SelectedPick } from "@xata.io/client";

export const getAllUsers = async (): Promise<
  Readonly<SelectedPick<NextauthUsersRecord, ["*"]>[]>
> => {
  try {
    const users = await XataClient.db.nextauth_users.getAll();
    console.log("🚀  HERE>>>>>> :  : users:", users);

    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    console.log("User ERROR", error);
    throw new Error("Could not get you your users, sorry.");
  }
};
