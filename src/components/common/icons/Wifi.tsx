import * as React from "react";
import { SVGProps } from "react";
const WifiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 25.1C13.9532 21.8073 18.9352 20.0043 24.08 20.0043C29.2248 20.0043 34.2069 21.8073 38.16 25.1M2.84003 18C8.68487 12.8479 16.2086 10.0053 24 10.0053C31.7914 10.0053 39.3152 12.8479 45.16 18M17.06 32.22C19.0904 30.7775 21.5194 30.0025 24.01 30.0025C26.5007 30.0025 28.9296 30.7775 30.96 32.22M24 40H24.02"
      stroke="white"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default WifiIcon;
