"use server";

import { XataClient } from "@/xata/client";
import { NextauthUsersRecord } from "@/xata/xata";
import { SelectedPick } from "@xata.io/client";

export const updateUsersCompanyId = async (
  id: string,
  companyId: number
): Promise<Readonly<SelectedPick<NextauthUsersRecord, ["*"]>>> => {
  try {
    const updatedUser = await XataClient.db.nextauth_users.update(id, {
      companyId,
    });

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log("User ERROR", error);
    throw new Error("Could not get you your users, sorry.");
  }
};
