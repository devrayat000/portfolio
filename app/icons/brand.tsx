import { useMantineTheme } from "@mantine/core";
import type { TablerIconProps } from "@tabler/icons";

interface BrandProps extends TablerIconProps {
  variant?: "light" | "dark";
}

const IconBrand: React.FC<BrandProps> = ({
  size = 24,
  color = "currentColor",
  variant,
  ...props
}) => {
  const theme = useMantineTheme();
  const themedColor = variant
    ? variant == "light"
      ? theme.black
      : theme.white
    : theme.colorScheme === "light"
    ? theme.black
    : theme.white;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      // @ts-ignore
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.8182 111V101.636L65.7727 30H16.4091V17.9091H82.9545V27.2727L34 98.9091H83.3636V111H16.8182Z"
        fill={themedColor}
      />
      <rect x="100" y="99" width="12" height="12" fill={themedColor} />
      <rect
        x="1.5"
        y="1.5"
        width="125"
        height="125"
        stroke={themedColor}
        strokeWidth="3"
      />
    </svg>
  );
};

export default IconBrand;
