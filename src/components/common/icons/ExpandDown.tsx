import * as React from "react";
import { SVGProps } from "react";
const ExpandDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 15L12 9L18 15" stroke="#33363F" strokeWidth={2} />
  </svg>
);
export default ExpandDown;
