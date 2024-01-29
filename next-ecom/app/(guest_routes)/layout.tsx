import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function GuestLayout({ children }: Props) {
  const session = await auth();
  //console.log("auth session ", session);

  if (session) return redirect("/");

  return <div>{children}</div>;
}
