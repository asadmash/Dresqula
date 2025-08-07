"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Correct default import for next/image

export default function AuthButton() {
  //destructure data from userSession hook
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <p className="bg-accent text-black hover:bg-blackfish hover:text-white px-4 py-2 rounded-4xl font-medium">
        Loading...
      </p>
    );
  }
  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-2.5 bg-accent rounded-4xl">
        <button
          onClick={() => signOut()}
          className="bg-accent text-black hover:bg-blackfish hover:text-white px-4 py-2 rounded-4xl font-medium transition-all delay-100"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => router.push("/signin")}
      className="bg-blackfish text-white hover:bg-accent hover:text-black px-4 py-2 rounded-4xl font-medium transition-all delay-100"
    >
      Sign In
    </button>
  );
}
