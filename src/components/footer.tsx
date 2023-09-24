import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="mb-10 px-4 text-center text-gray-600">
      <small className="mb-2 block text-xs">
        &copy; Karan Jivani. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind.CSS,
        Framer-Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}

export default Footer;
