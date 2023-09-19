import React from "react";

type SectionHeadingProps = { children: React.ReactNode };

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 flex w-full flex-row items-center justify-center text-3xl font-medium capitalize">
      {children}
    </h2>
  );
}

export default SectionHeading;
