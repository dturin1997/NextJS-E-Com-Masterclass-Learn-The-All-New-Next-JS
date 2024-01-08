import { NewUserRequest } from "@/app/types";
import startDb from "@lib/db";
import UserModel from "@models/userModel";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = (await req.json()) as NewUserRequest;

  await startDb();

  const newUser = await UserModel.create({
    ...body,
  });

  console.log(await newUser.comparePassword("12345678"));
  console.log(await newUser.comparePassword("1234567")); 

  return NextResponse.json(newUser);
};
