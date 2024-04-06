"use client";

import { signIn } from "next-auth/react";
import React from "react";

export const GithubLoginBtn = () => {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      깃헙로그인
    </button>
  );
};
