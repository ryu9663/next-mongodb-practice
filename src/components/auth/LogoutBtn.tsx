"use client";

import { signOut } from "next-auth/react";
import React from "react";

export const LogoutBtn = () => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      로그아웃
    </button>
  );
};
