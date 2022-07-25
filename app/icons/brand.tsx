import type { Icon } from "tabler-icons-react";

export const BrandLight: Icon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.8182 111V101.636L65.7727 30H16.4091V17.9091H82.9545V27.2727L34 98.9091H83.3636V111H16.8182Z"
        fill="black"
      />
      <rect x="100" y="99" width="12" height="12" fill="black" />
      <rect
        x="1.5"
        y="1.5"
        width="125"
        height="125"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
};

export const BrandDark: Icon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.8182 111V101.636L65.7727 30H16.4091V17.9091H82.9545V27.2727L34 98.9091H83.3636V111H16.8182Z"
        fill="white"
      />
      <rect x="100" y="99" width="12" height="12" fill="white" />
      <rect
        x="1.5"
        y="1.5"
        width="125"
        height="125"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
};
