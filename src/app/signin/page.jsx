"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Sign In Required</h1>
      <p>Please sign in to continue.</p>
      <button
        onClick={() => signIn("google", { callbackUrl })}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          color: "white",
          backgroundColor: "#4285F4",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
