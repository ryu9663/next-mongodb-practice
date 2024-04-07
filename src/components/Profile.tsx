"use client";
import { Session } from "next-auth";
import Image from "next/image";
import React from "react";

interface ProfileType {
  user: Session;
}
export const Profile = ({ user }: ProfileType) => {
  // const { name, email, image } = user.user;
  const profile = user.user;
  const isValidUser =
    !!profile &&
    typeof profile.name === "string" &&
    typeof profile.email === "string" &&
    typeof profile.image === "string";
  if (isValidUser) {
    const { name, email, image } = profile;
    return (
      <section>
        <img
          src={image as string}
          alt={name as string}
          width={100}
          height={100}
        />
        <div>{name as string}</div>
        <div>{email as string}</div>
      </section>
    );
  }
  return <div>유효한 유저가 아닙니다.</div>;
};
