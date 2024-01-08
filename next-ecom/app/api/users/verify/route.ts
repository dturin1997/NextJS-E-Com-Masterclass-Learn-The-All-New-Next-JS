import EmailVerificationToken from "@models/emailVerificationToken";
import UserModel from "@models/userModel";
import { EmailVerifyReques } from "@/app/types";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { token, userId } = (await req.json()) as EmailVerifyReques;

    if (!isValidObjectId(userId) || !token) {
      return NextResponse.json(
        {
          error: "Invalid request, userId and token is required!",
        },
        { status: 401 }
      );
    }

    const verifyToken = await EmailVerificationToken.findOne({ user: userId });

    if (!verifyToken) {
      return NextResponse.json(
        {
          error: "Invalid token!",
        },
        { status: 401 }
      );
    }

    const isMatched = await verifyToken.compareToken(token);

    if (!isMatched) {
      return NextResponse.json(
        {
          error: "Invalid token, token doesn't match!",
        },
        { status: 401 }
      );
    }

    await UserModel.findByIdAndUpdate(userId, { verified: true });
    await EmailVerificationToken.findByIdAndDelete(verifyToken._id);

    return NextResponse.json({ message: "Your email is verified." });
  } catch (error) {
    return NextResponse.json(
      {
        error: "could not verify email, something went wrong!",
      },
      { status: 500 }
    );
  }
};
