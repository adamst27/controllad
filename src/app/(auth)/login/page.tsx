import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen w-full grid grid-cols-2 justify-center items-center bg-primary">
      <div className="py-16 px-10 flex flex-col justify-start items-start w-full h-full text-secondary">
        <h2 className="text-stone text-2xl font-semibold leading-relaxed [letter-spacing:2px]">
          Login to your account
        </h2>

        <p className="text-sm text-muted">
          don&apos;t have one?,{" "}
          <Link href="/signup" className="text-accent">
            signup
          </Link>
        </p>
      </div>
      <div className="w-full h-full">hhhb</div>
    </main>
  );
};

export default page;
