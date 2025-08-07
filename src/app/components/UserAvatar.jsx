"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { BsPerson } from "react-icons/bs";

const UserAvatar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Render a placeholder to prevent layout shift and flicker
    return <div className="w-[32px] h-[32px] bg-gray-200 rounded-full" />;
  }

  if (status === "authenticated") {
    return (
      <Image
        src={session.user.image}
        alt={session.user.name}
        width={32}
        height={32}
        className="rounded-full"
        objectFit="cover"
      />
    );
  }

  // Render the default person icon if not authenticated
  return <BsPerson />;
};

export default UserAvatar;