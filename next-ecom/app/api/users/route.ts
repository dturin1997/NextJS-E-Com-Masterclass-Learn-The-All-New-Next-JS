import { NewUserRequest } from "@/app/types";
import startDb from "@lib/db";
import UserModel from "@models/userModel";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const body = (await req.json()) as NewUserRequest;

  await startDb();

  const newUser = await UserModel.create({
    ...body,
  });

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "413f7b922ac666",
      pass: "83a84ef34adc84",
    },
  });

  await transport.sendMail({
    from: "verification@nextecom.com",
    to: newUser.email,
    html: `<h1>Please verify your email by clicking on <a href="http://localhost:3000">this link</a></h1>`,
  });

  console.log(await newUser.comparePassword("12345678"));
  console.log(await newUser.comparePassword("1234567"));

  return NextResponse.json(newUser);
};
