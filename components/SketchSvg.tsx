import React from "react";

export function SketchUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 260 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 9.5C45 4 110 3 258 7.5C185 11 75 12 18 11.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SketchPaperclip({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 8V48C16 54.5 10.5 58 6 54C1.5 50 1.5 42 1.5 38V18C1.5 10 7.5 4 16 4C24.5 4 30.5 10 30.5 18V46C30.5 53 25 58 19 58C13 58 8 53 8 46V20"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SketchBracket({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 2C8 2 3 6 3 14V17C3 19 1 20 1 20C1 20 3 21 3 23V26C3 34 8 38 14 38"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SketchStar({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 1.5L12.5 6.8L18.3 7.6L14.1 11.7L15.1 17.5L10 14.8L4.9 17.5L5.9 11.7L1.7 7.6L7.5 6.8L10 1.5Z" />
    </svg>
  );
}

export function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

export function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}
