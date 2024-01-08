import { notFound } from "next/navigation";
import React from "react";

interface Props {
  searchParams: {
    token: string;
    userId: string;
  };
}

export default function Verify(props: Props) {
  const { token, userId } = props.searchParams;

  //verify the token and userId

  if (!token || !userId) return notFound;

  return (
    <div className="text-3xl opacity-70 text-center p-5 animate-pulse">
      Please wait...
      <p>We are verifying your email</p>
    </div>
  );
}
