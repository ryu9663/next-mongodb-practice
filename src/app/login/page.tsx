"use client";
import React from "react";

export default function Login() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <h2>로그인</h2>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <span>아이디</span>
            <input type="text" />
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" />
          </label>
          <button type="submit">로그인</button>
        </form>
      </section>
    </>
  );
}
