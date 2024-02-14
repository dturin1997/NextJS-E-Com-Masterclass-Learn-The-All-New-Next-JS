import UpdatePassword from "@/app/components/UpdatePassword";
import startDb from "@/app/lib/db";
import PasswordResetTokenModel from "@/app/models/passwordResetTokenModel";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  searchParams: {
    token: string;
    userId: string;
  };
}

const fetchTokenValidation = async (token: string, userId: string) => {
  await startDb();

  const resetToken = await PasswordResetTokenModel.findOne({ user: userId });
  if (!resetToken) return null;

  const matched = await resetToken.compareToken(token);
  if (!matched) return null;

  return true;
};

export default async function ResetPassword({ searchParams }: Props) {
  const { token, userId } = searchParams;
  //console.log(props);

  if (!token || !userId) return notFound();

  const isValid = await fetchTokenValidation(token, userId);
  if (!isValid) return notFound();

  return <UpdatePassword token={token} userId={userId} />;
}
