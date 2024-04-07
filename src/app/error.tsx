"use client";

import Link from "next/link";
import React, { useEffect } from "react";

// https://nextjs.org/docs/app/building-your-application/routing/error-handling
export interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      {/* <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      > */}
      <Link href="/posts">Try again</Link>
    </div>
  );
}
